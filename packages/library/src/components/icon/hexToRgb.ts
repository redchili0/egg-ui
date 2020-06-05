// Colors
export default function hexToRgb(hexValue : string) {
    if (hexValue.indexOf('rgb') === -1) { // 看看是不是已经是rgb了
        if (hexValue.indexOf('#') !== -1) {
            const rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            const hex = hexValue.replace(rgx, (m, r, g, b) => r + r + g + g + b + b );
            const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) as RegExpExecArray;
            const r = parseInt(rgb[1], 16);
            const g = parseInt(rgb[2], 16);
            const b = parseInt(rgb[3], 16);
            return `rgb(${r},${g},${b})`;
        }
        return hexValue
    }
    return hexValue
  }