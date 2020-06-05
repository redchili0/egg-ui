/**
 * 将单个元素的对象转换为数组，如： {a:'a'} => ['a', 'a']
 */

export function singleObjToArray(obj: Record<string, any>) {
  const keys = Object.keys(obj);
  if (keys.length > 1) {
    throw "对象不是单一元素对象， 无法转换为特定数组";
  }
  let res: [string, any] = [keys[0], obj[keys[0]]];

  return res;
}
