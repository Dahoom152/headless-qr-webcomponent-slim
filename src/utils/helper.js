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
  const viewBoxSize = modules.length; // Set the viewBox size to the number of modules
  let svgStr = `<svg xmlns:ev="http://www.w3.org/2001/xml-events" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${size}" height="${size}" viewBox="0 0 ${viewBoxSize} ${viewBoxSize}">`;

  for (let row = 0; row < modules.length; row++) {
    for (let col = 0; col < modules[row].length; col++) {
      svgStr += `<rect x="${row}" y="${col}" width="1" height="1" fill="${
        modules[row][col] ? color : backgroundColor
      }" stroke="${modules[row][col] ? color : backgroundColor}"/>`;
    }
  }
  svgStr += "</svg>";

  return svgStr;
};
