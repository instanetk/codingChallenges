const getContrastingColor = (color, level) => {
  // Write your code here
  // Feel free to use console.log() for debugging purposes

  const hexToRGB = (hex) => {
    let R = parseInt(hex.slice(1, 3), 16);
    let G = parseInt(hex.slice(3, 5), 16);
    let B = parseInt(hex.slice(5, 7), 16);
    return calculateRelativeLuminance(R, G, B);
  };

  let relativeLuminance;

  if (typeof color === 'string') {
    relativeLuminance = hexToRGB(color);
  } else {
    relativeLuminance = calculateRelativeLuminance(color[0], color[1], color[2]);
  }

  let textColor;

  let blackText = 0;
  let whiteText = 1;

  let ratioB = (relativeLuminance + 0.05) / (blackText + 0.05);
  let ratioW = (whiteText + 0.05) / (relativeLuminance + 0.05);

  let ratio;

  if (ratioB > ratioW) {
    textColor = '#000000';
    ratio = ratioB;
  } else {
    textColor = '#ffffff';
    ratio = ratioW;
  }

  let wcag = level == 'AA' ? 4.5 : 7;

  let isValid = ratio > wcag;
  if (!isValid) throw new Error("Couldn't find contrasting color");

  return textColor;
};

// Feel free to use this function to calculate relative luminance
// each argument is a number in range [0-255]
const calculateRelativeLuminance = (red, green, blue) => {
  const colors = [red / 255, green / 255, blue / 255];
  let [R, G, B] = colors.map((color) => {
    if (color <= 0.03928) {
      return color / 12.92;
    } else {
      return Math.pow((color + 0.055) / 1.055, 2.4);
    }
  });
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
};

// console.log(calculateRelativeLuminance(84, 255, 255));
// console.log(calculateRelativeLuminance(0, 0, 0));
// console.log(calculateRelativeLuminance(119, 119, 119));

console.log(getContrastingColor('#ffffff', 'AA'));
console.log(getContrastingColor('#ffffff', 'AAA'));
console.log(getContrastingColor('#777777', 'AA'));
console.log(getContrastingColor('#777777', 'AAA'));
console.log(getContrastingColor('#000000', 'AA'));
console.log(getContrastingColor('#000000', 'AAA'));
console.log(getContrastingColor('#111111', 'AAA'));
// console.log(getContrastingColor([84, 255, 255]));
