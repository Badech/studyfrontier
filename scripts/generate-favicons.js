/**
 * Favicon Generator Script
 * Generates all required favicon sizes from SVG source
 * 
 * Note: This script requires sharp package
 * Install: npm install --save-dev sharp
 * Run: node scripts/generate-favicons.js
 */

const fs = require('fs');
const path = require('path');

// Simple HTML Canvas-based favicon generator (no dependencies)
const { createCanvas } = require('canvas') || null;

console.log('🎨 StudyFrontier Favicon Generator\n');

// Favicon configurations
const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

const publicDir = path.join(__dirname, '..', 'public');

// Function to create a simple favicon using Canvas
function generateFavicon(size, outputPath) {
  try {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Background
    const cornerRadius = size * 0.1875; // 6/32 ratio
    ctx.fillStyle = '#0ea5e9';
    roundRect(ctx, 0, 0, size, size, cornerRadius);
    ctx.fill();
    
    // Calculate font size based on canvas size
    const fontSize = Math.floor(size * 0.5);
    ctx.font = `bold ${fontSize}px Arial, sans-serif`;
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Draw "SF" text
    ctx.fillText('SF', size / 2, size / 2);
    
    // Save to file
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputPath, buffer);
    
    console.log(`✓ Generated: ${path.basename(outputPath)} (${size}x${size})`);
    return true;
  } catch (error) {
    console.log(`✗ Failed to generate ${path.basename(outputPath)}: ${error.message}`);
    return false;
  }
}

// Helper function to draw rounded rectangle
function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

// Main execution
console.log('Checking for required packages...\n');

if (!createCanvas) {
  console.log('⚠️  Canvas package not found.');
  console.log('\nTo generate PNG favicons automatically:');
  console.log('1. Install canvas: npm install --save-dev canvas');
  console.log('2. Run this script again: node scripts/generate-favicons.js\n');
  console.log('Alternative: Use online tool https://favicon.io/favicon-generator/');
  console.log('Settings: Text="SF", Background=#0ea5e9, Font=Inter\n');
  process.exit(0);
}

// Generate all sizes
console.log('Generating favicon assets...\n');

let successCount = 0;
sizes.forEach(({ name, size }) => {
  const outputPath = path.join(publicDir, name);
  if (generateFavicon(size, outputPath)) {
    successCount++;
  }
});

console.log(`\n✅ Successfully generated ${successCount}/${sizes.length} favicon files`);
console.log(`📁 Location: ${publicDir}\n`);

// Create favicon.ico (requires additional processing)
console.log('Note: favicon.ico requires multi-size ICO format.');
console.log('Use online converter: https://www.icoconverter.com/');
console.log('Upload: favicon-32x32.png\n');

console.log('✅ Favicon generation complete!');
