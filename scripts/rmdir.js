const fs = require('fs');
const dir = process.argv[2];
if (dir && fs.existsSync(dir)) {
  fs.rm(dir, { recursive: true }, () => {
    console.log(`Removed old ${dir} directory`);
  });
  console.log(`Cleaning ${dir}...`);
} else console.log('Directory not found');
