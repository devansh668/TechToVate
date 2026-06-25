const fs = require('fs');

const filepath = 'src/app/blogs/summer-spots-india/page.tsx';
let content = fs.readFileSync(filepath, 'utf-8');

const replacements = {
  "Manali": '"/images/custom_manali.png"',
  "Shimla": '"/images/custom_shimla.png"',
  "Nainital, Uttarakhand": '"/images/custom_nainital.png"',
  "Darjeeling": '"/images/custom_darjeeling.png"',
  "Munnar, Kerala": '"/images/custom_munnar.png"',
  "Ooty": '"/images/custom_ooty.png"'
};

for (let [place, newImg] of Object.entries(replacements)) {
    // This regex looks for the H3 header containing the place name, 
    // skips to the ImageSlider, and replaces the VERY FIRST image in the array with our custom one.
    let escapedPlace = place.replace(/,/g, ','); // No special regex chars in our keys
    let regex = new RegExp(`(<h3[^>]*>\\s*\\d+\\.\\s*${escapedPlace}\\s*</h3>\\s*<div[^>]*>\\s*<ImageSlider images={\\[)([^,]*)`, 'g');
    content = content.replace(regex, `$1${newImg}`);
}

fs.writeFileSync(filepath, content, 'utf-8');
console.log("Injected custom images into the India Summer Spots blog.");
