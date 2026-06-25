import re
import random

india_pool = [
  "/images/india_manali.jpg", "/images/india_shimla.jpg", "/images/india_nainital.png",
  "/images/india_darjeeling.jpg", "/images/india_munnar.png", "/images/india_ooty.png",
  "/images/india_ladakh.jpg", "/images/india_gangtok.jpg", "/images/india_coorg.jpg",
  "/images/india_goa.jpg", "/images/new_goa.png", "/images/new_kashmir.png",
  "/images/new_andaman.png", "/images/new_rajasthan.png", "/images/india_summer_blog.jpg",
  "/images/hero_dhanaulti.jpg", "/images/hero_manali.jpg"
]

intl_pool = [
  "/images/budget_thailand.jpg", "/images/budget_bali.png", "/images/budget_vietnam.png",
  "/images/dubai.png", "/images/budget_singapore.jpg", "/images/budget_singapore.png",
  "/images/budget_malaysia.jpg", "/images/budget_srilanka.png", "/images/budget_nepal.png",
  "/images/budget_bhutan.jpg", "/images/budget_maldives.png", "/images/budget_international_blog.jpg",
  "/images/new_bali.jpg", "/images/new_egypt.jpg", "/images/new_kenya.jpg",
  "/images/new_malaysia.jpg", "/images/new_maldives.jpg", "/images/new_singapore.jpg",
  "/images/new_thailand.jpg", "/images/new_uae.jpg", "/images/paris.png",
  "/images/interlaken.png", "/images/santorini_hero.png"
]

bali_pool = [
  "/images/bali.png", "/images/bali_amed.png", "/images/bali_amed_diving.png",
  "/images/bali_besakih.png", "/images/bali_blog.jpg", "/images/bali_mount_batur.png",
  "/images/bali_nusa_penida.jpg", "/images/bali_sanur.png", "/images/bali_seminyak.jpg",
  "/images/bali_tanah_lot.jpg", "/images/bali_tegallalang.jpg", "/images/bali_ubud.jpg",
  "/images/bali_uluwatu.jpg", "/images/new_bali.jpg", "/images/budget_bali.png"
]

def process_file(filepath, pool):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    def replacer(match):
        images_str = match.group(1)
        # Parse the images
        images = [img.strip().strip("'").strip('"') for img in images_str.split(',') if img.strip()]
        
        # We need 5 unique images
        unique_images = []
        for img in images:
            if img not in unique_images:
                unique_images.append(img)
        
        if len(unique_images) < 5:
            # Pick from pool to fill up to 5
            available_pool = [img for img in pool if img not in unique_images]
            needed = 5 - len(unique_images)
            random.seed(len(images_str)) # deterministic random
            chosen = random.sample(available_pool, min(needed, len(available_pool)))
            unique_images.extend(chosen)
            
        # Ensure max 5
        unique_images = unique_images[:5]
        
        # Format back
        new_str = ", ".join(f'"{img}"' for img in unique_images)
        return f'images={{[{new_str}]}}'

    # Regex to find images={["...", "..."]}
    new_content = re.sub(r'images=\{\[(.*?)\]\}', replacer, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

process_file('src/app/blogs/summer-spots-india/page.tsx', india_pool)
process_file('src/app/blogs/budget-international/page.tsx', intl_pool)
process_file('src/app/blogs/top-10-bali/page.tsx', bali_pool)
print("Updated all files successfully.")
