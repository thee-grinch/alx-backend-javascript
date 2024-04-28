export default function hasValuesFromArray(data, values) {
  for (let i = 0; i < values.length; i++) { // eslint-disable-line no-plusplus
    if (!data.has(values[i])) {
      return false;
    }
  }
  return true;
}
