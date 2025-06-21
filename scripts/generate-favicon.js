const fs = require('fs');
const path = require('path');

// Simple ICO file header and data for a 16x16 orange pizza icon
// This is a basic ICO file structure - in a real scenario, you'd want to use a proper image processing library
const icoData = Buffer.from([
  // ICO file header
  0x00, 0x00, // Reserved
  0x01, 0x00, // Type (1 = ICO)
  0x01, 0x00, // Number of images
  
  // Directory entry
  0x10,       // Width (16)
  0x10,       // Height (16)
  0x00,       // Color count
  0x00,       // Reserved
  0x01, 0x00, // Color planes
  0x20, 0x00, // Bits per pixel
  0x40, 0x00, 0x00, 0x00, // Size of image data
  0x16, 0x00, 0x00, 0x00, // Offset to image data
  
  // PNG data (simplified - this would normally be a proper PNG)
  // This is just a placeholder - in practice you'd convert the SVG to PNG first
]);

// Write the favicon to the public directory
const publicDir = path.join(__dirname, '..', 'public');
const faviconPath = path.join(publicDir, 'favicon.ico');

fs.writeFileSync(faviconPath, icoData);
console.log('Favicon generated at:', faviconPath); 