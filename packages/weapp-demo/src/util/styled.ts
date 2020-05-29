function toCamel(str) {
  return str.replace(/^-/, '').replace(/-(\w)(\w+)/g, (a, b,c) => {
  return b.toUpperCase() + c.toLowerCase();
 });
}

export function css(staticContent, ...dynamic) {
  let res = '';
  for(let i = 0; i < staticContent.length; i +=1) {
      res += `${staticContent[i]}${i < staticContent.length -1 ? dynamic[i] : ""}`;
  }
  const tmp = res.trim();
  const tmpArr = tmp.split(';');
  const result = {};
  tmpArr.forEach(item => {
    if (item) {
    const arr = item.split(':');
    result[toCamel(arr[0]).trim()] = arr[1].trim()
    }
  })
  return result;
}


