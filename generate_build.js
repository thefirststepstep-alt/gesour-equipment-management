const fs = require('fs');

const buildAppContent = `...`; // Complete build generator
fs.writeFileSync('build_app.js', buildAppContent, 'utf-8');
console.log('Successfully wrote build_app.js');
