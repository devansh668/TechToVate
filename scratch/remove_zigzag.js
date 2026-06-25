const fs = require('fs');

const filesToProcess = [
  'src/app/blogs/top-10-bali/page.tsx',
  'src/app/blogs/budget-international/page.tsx',
  'src/app/blogs/summer-spots-india/page.tsx'
];

for (const filePath of filesToProcess) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // The block starts with a comment like {/* 1. ... */}
    // Then <div className="flex flex-col md:flex-row ...>
    // We want to capture:
    // 1. Comment
    // 2. The Slider element
    // 3. The h3 element
    // 4. The paragraphs (rest of content)
    
    // Pattern to match the structure created by the previous script
    const pattern = /({\/\*\s*\d+\.\s*.*?\*\/})\s*<div className="flex flex-col md:flex-row[^>]*>\s*<div className="w-full md:w-1\/2[^>]*>\s*<div className="relative[^>]*>\s*<div className="card-3d[^>]*>\s*(<ImageSlider[\s\S]*?\/>)\s*<\/div>\s*<\/div>\s*<\/div>\s*<div className="w-full md:w-1\/2[^>]*>\s*(<h3[^>]*>[\s\S]*?<\/h3>)\s*([\s\S]*?)\s*<\/div>\s*<\/div>/g;

    let matchCount = 0;
    
    const newContent = content.replace(pattern, (match, comment, slider, h3, restOfContent) => {
      matchCount++;

      // We'll remove the !mt-0 from h3 since it will now be at the top
      const cleanedH3 = h3.replace(' !mt-0', '').replace('text-2xl', 'text-xl sm:text-2xl pt-6 pb-4');

      return `${comment}
              <div className="py-4">
                ${cleanedH3}
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 card-perspective mb-6">
                  <div className="card-3d w-full h-full rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                    ${slider}
                  </div>
                </div>
                <div className="space-y-4">
                  ${restOfContent.trim()}
                </div>
              </div>`;
    });

    if (matchCount > 0) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Removed zig-zag from ${matchCount} locations in ${filePath}.`);
    } else {
      console.log(`No matches found in ${filePath}.`);
    }
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
  }
}
