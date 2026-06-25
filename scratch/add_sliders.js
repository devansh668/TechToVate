const fs = require('fs');

const files = {
  'src/app/blogs/top-10-bali/page.tsx': [
    '/images/bali.png',
    '/images/bali_blog.jpg',
    '/images/budget_bali.png',
    '/images/bali_amed.png'
  ],
  'src/app/blogs/budget-international/page.tsx': [
    '/images/budget_international_blog.jpg',
    '/images/budget_thailand.jpg',
    '/images/dubai.png',
    '/images/paris.png'
  ],
  'src/app/blogs/summer-spots-india/page.tsx': [
    '/images/india_summer_blog.jpg',
    '/images/india_coorg.jpg',
    '/images/india_darjeeling.jpg',
    '/images/india_goa.jpg'
  ]
};

// Helper to get random samples
function getRandomSamples(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

for (const [filePath, extraImages] of Object.entries(files)) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    if (!content.includes('ImageSlider')) {
      content = content.replace(
        "import Image from 'next/image';",
        "import Image from 'next/image';\nimport ImageSlider from '@/components/ImageSlider';"
      );
    }

    // Regex to match the wrapping div and Image tag structure
    const pattern = /(<div className="relative h-\[200px\] sm:h-\[350px\] w-full rounded-2xl overflow-hidden my-4 bg-slate-100 border border-slate-200\/50 shadow-sm">\s*)<Image\s+src="([^"]+)"\s+alt="([^"]+)"\s+fill(?:\s+priority)?\s+className="object-cover"\s*\/>(\s*<\/div>)/g;

    let count = 0;
    const newContent = content.replace(pattern, (match, divStart, src, alt, divEnd) => {
      count++;
      const images = [src];
      const pool = extraImages.filter(img => img !== src);
      const sampled = getRandomSamples(pool, Math.min(2, pool.length));
      
      images.push(...sampled);

      const imagesStr = JSON.stringify(images).replace(/"/g, "'");

      return `${divStart}<ImageSlider images={${imagesStr.replace(/'/g, '"')}} alt="${alt}" />${divEnd}`;
    });

    if (count > 0) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Replaced ${count} images with sliders in ${filePath}.`);
    } else {
      console.log(`No images found to replace in ${filePath} (they may already be converted).`);
    }

  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}
