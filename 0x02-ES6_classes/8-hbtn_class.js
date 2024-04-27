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
}