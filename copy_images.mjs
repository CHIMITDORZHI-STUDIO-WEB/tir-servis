import fs from 'fs';
import path from 'path';

const srcDir = 'c:\\Users\\Вика\\.gemini\\antigravity\\brain\\de539c81-ccba-4caf-bbe6-7f6282dff081';
const destDir = 'c:\\Users\\Вика\\.gemini\\antigravity\\playground\\vast-ring\\public\\assets\\gallery';

const files = [
    'media__1772725536371.jpg',
    'media__1772725536417.jpg',
    'media__1772725536482.jpg',
    'media__1772725536540.jpg',
    'media__1772725536566.jpg'
];

fs.mkdirSync(destDir, { recursive: true });

files.forEach((file, index) => {
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, `${index + 1}.jpg`));
});
console.log('Copied successfully');
