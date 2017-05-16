/**
 * 存储localStorage
 */
const localEvent = function (item) {
    this.get = function () {
        return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : '';
    }
    this.set = function (obj) {
        localStorage.setItem(item, JSON.stringify(obj));
    }
    this.clear = function () {
        localStorage.removeItem(item);
    }
}

/**
 * 获取sessionStorage
 */
const sessionEvent=function(item){
     this.get = function () {
        return sessionStorage.getItem(item) ? JSON.parse(sessionStorage.getItem(item)) : '';
    }
    this.set = function (obj) {
        sessionStorage.setItem(item, JSON.stringify(obj));
    }
    this.clear = function () {
        sessionStorage.removeItem(item);
    }
}
export const local = new localEvent('LOCAL_KEY');
export const session = new sessionEvent('SESSION_KEY');