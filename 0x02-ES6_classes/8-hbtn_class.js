export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw TypeError('size should be a Number');
    }
    if (typeof location !== 'string') {
      throw TypeError('location should be a string');
    }
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set size(value) {
    if (typeof value !== 'number') {
      throw TypeError('size should be a Number');
    }
    this._size = value;
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw TypeError('location should be a string');
    }
    this._location = value;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return this;
  }
}
