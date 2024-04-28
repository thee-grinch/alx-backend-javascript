export default function cleanSet(set, startString) {
  if (!set || !startString) {
    return '';
  }
  if (typeof set !== 'object' || !Array.isArray([...set])) {
    return '';
  }
  if (typeof startString !== 'string') {
    return '';
  }
  let result = '';

  for (const value of set) {
    if (value.startsWith(startString)) {
      result += `${value.slice(startString.length)}-`;
    }
  }

  // Remove the trailing dash
  result = result.slice(0, -1);

  return result;
}
