export const pxConvert = (size, reverse = false) => {
  if (!reverse) {
    return size?.endsWith("px") ? size : `${size}px`;
  } else {
    return size?.endsWith("px") ? size.split("px")[0] : size;
  }
};

export const generateSvg = (modules, size, color, backgroundColor) => {
  // Calculate the cell size based on the number of modules in the QR code
  const cellSize = (pxConvert(size, true) / modules.length).toFixed(5);
  let svgStr = `<svg xmlns:ev="http://www.w3.org/2001/xml-events" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">`;

  for (let row = 0; row < modules.length; row++) {
    for (let col = 0; col < modules[row].length; col++) {
      svgStr += `<rect x="${(row * cellSize).toFixed(5)}" y="${(
        col * cellSize
      ).toFixed(3)}" width="${cellSize}" height="${cellSize}" fill="${
        modules[row][col] ? color : backgroundColor
      }" stroke="${modules[row][col] ? color : backgroundColor}"/>`;
    }
  }
  svgStr += "<svg>";

  return svgStr;
};
