/**
 * null 克隆为 {}
 * 循环引用为浅拷贝
 */
function deepClone(source, map = new Map()) {
  if(source instanceof Date) return new Date(source);
  if(source instanceof RegExp) return new RegExp(source);
  if(source instanceof Function) {
    return new Function('return ' + source.toString())();
  }
  if(typeof source === 'object') {
    let target = Array.isArray(source) ? [] : {};
    if(map.get(source)) {
      return map.get(source);
    }
    map.set(source, source);
    for(const key in source) {
      target[key] = deepClone(source[key], map);
    }
    return target;
  } else {
    return source
  }
}