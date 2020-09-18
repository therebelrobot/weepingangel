const BlinkDiff = require('blink-diff');
const fs = require('fs');
const path = require('path');
const images = fs.readdirSync(path.join(__dirname, 'ss-old'));
const passedWithNoDiffs = [];

const SCREENSHOT_DIFF_DIR = path.join(__dirname, 'ss-diff');

console.log(`Comparing ${images.length} pairs of images...`);

if (!fs.existsSync(SCREENSHOT_DIFF_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIFF_DIR);
}

let ran = 0;
for (const pngName of images) {
  var diff = new BlinkDiff({
    imageAPath: path.join(__dirname, 'ss-old', pngName),
    imageBPath: path.join(__dirname, 'ss-new', pngName),

    thresholdType: BlinkDiff.THRESHOLD_PERCENT,
    threshold: 0.01, // 1% threshold

    imageOutputPath: path.join(SCREENSHOT_DIFF_DIR, pngName)
  });

  diff.run(function (error, result) {
    if (error) {
      console.error('ERR', pngName, error);
    } else {
      if (diff.hasPassed(result.code) && !result.differences) {
        passedWithNoDiffs.push(pngName);
      } else {
        console.log(pngName, diff.hasPassed(result.code) ? 'Passed' : 'Failed', `(${result.differences} differences)`);
      }
    }

    if (++ran === images.length) {
      console.log('--- The following passed with 0 differences ---');
      passedWithNoDiffs.forEach((entry) => console.log(entry));
    }
  });
}