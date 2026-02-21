const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const readmePath = path.join(root, 'README.md');
const backupPath = path.join(root, 'README.md.bak');

function run() {
  const originalReadme = fs.readFileSync(readmePath, 'utf8');
  fs.writeFileSync(backupPath, originalReadme, 'utf8');

  try {
    const packagedReadme = originalReadme
      .replace(/images\/logo\.svg/g, 'images/logo.png')
      .replace(
        /https:\/\/github\.com\/coi\/(?:vscode|coi)\/(?:blob|raw)\/(?:main|HEAD)\/images\/logo\.(?:svg|png)/g,
        'https://github.com/coi/vscode/raw/main/images/logo.png'
      );

    fs.writeFileSync(readmePath, packagedReadme, 'utf8');

    const result = spawnSync('npx', ['vsce', 'package'], {
      cwd: root,
      stdio: 'inherit',
      shell: process.platform === 'win32'
    });

    if (result.error) {
      throw result.error;
    }

    process.exitCode = result.status || 0;
  } finally {
    const backup = fs.readFileSync(backupPath, 'utf8');
    fs.writeFileSync(readmePath, backup, 'utf8');
    fs.unlinkSync(backupPath);
  }
}

run();
