const fs = require('fs');

const india_pool = [
  "/images/india_manali.jpg", "/images/india_shimla.jpg", "/images/india_nainital.png",
  "/images/india_darjeeling.jpg", "/images/india_munnar.png", "/images/india_ooty.png",
  "/images/india_ladakh.jpg", "/images/india_gangtok.jpg", "/images/india_coorg.jpg",
  "/images/india_goa.jpg", "/images/new_goa.png", "/images/new_kashmir.png",
  "/images/new_andaman.png", "/images/new_rajasthan.png", "/images/india_summer_blog.jpg",
  "/images/hero_dhanaulti.jpg", "/images/hero_manali.jpg"
];

const intl_pool = [
  "/images/budget_thailand.jpg", "/images/budget_bali.png", "/images/budget_vietnam.png",
  "/images/dubai.png", "/images/budget_singapore.jpg", "/images/budget_singapore.png",
  "/images/budget_malaysia.jpg", "/images/budget_srilanka.png", "/images/budget_nepal.png",
  "/images/budget_bhutan.jpg", "/images/budget_maldives.png", "/images/budget_international_blog.jpg",
  "/images/new_bali.jpg", "/images/new_egypt.jpg", "/images/new_kenya.jpg",
  "/images/new_malaysia.jpg", "/images/new_maldives.jpg", "/images/new_singapore.jpg",
  "/images/new_thailand.jpg", "/images/new_uae.jpg", "/images/paris.png",
  "/images/interlaken.png", "/images/santorini_hero.png"
];

const bali_pool = [
  "/images/bali.png", "/images/bali_amed.png", "/images/bali_amed_diving.png",
  "/images/bali_besakih.png", "/images/bali_blog.jpg", "/images/bali_mount_batur.png",
  "/images/bali_nusa_penida.jpg", "/images/bali_sanur.png", "/images/bali_seminyak.jpg",
  "/images/bali_tanah_lot.jpg", "/images/bali_tegallalang.jpg", "/images/bali_ubud.jpg",
  "/images/bali_uluwatu.jpg", "/images/new_bali.jpg", "/images/budget_bali.png"
];

function shuffle(array, seed) {
    let m = array.length, t, i;
    while (m) {
        i = (seed = (seed * 9301 + 49297) % 233280) % m;
        i = Math.floor(i);
        m--;
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

function processFile(filepath, pool) {
    if (!fs.existsSync(filepath)) return;
    let content = fs.readFileSync(filepath, 'utf-8');

    let new_content = content.replace(/images=\{\[(.*?)\]\}/gs, (match, p1) => {
        let images = p1.split(',').map(s => s.trim().replace(/^['"]|['"]$/g, '')).filter(s => s);
        let unique_images = [];
        for (let img of images) {
            if (!unique_images.includes(img)) unique_images.push(img);
        }
        
        if (unique_images.length < 5) {
            let available = pool.filter(img => !unique_images.includes(img));
            let needed = 5 - unique_images.length;
            let seed = p1.length; // deterministic random
            let shuffled = shuffle([...available], seed);
            unique_images.push(...shuffled.slice(0, needed));
        }
        
        unique_images = unique_images.slice(0, 5);
        return 'images={[' + unique_images.map(img => `"${img}"`).join(', ') + ']}';
    });

    fs.writeFileSync(filepath, new_content, 'utf-8');
}

processFile('src/app/blogs/summer-spots-india/page.tsx', india_pool);
processFile('src/app/blogs/budget-international/page.tsx', intl_pool);
processFile('src/app/blogs/top-10-bali/page.tsx', bali_pool);
console.log("Updated all files successfully using Node.js");
