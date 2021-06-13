export const isObj = function isObj(value) {
    return Object.prototype.toString.call(value) === '[object Object]'
}

export const isNumber = function isNumber(value) {
    return /^\d+$/.test(value);
}

export const isArray = function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
}


