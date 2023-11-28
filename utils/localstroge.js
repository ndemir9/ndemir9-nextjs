export const setStorage = (key, value) => {
    localStorage.setItem(key, value);
}
export const getStorage = (key) => {
    let storageValue = localStorage.getItem(key);
    return storageValue
}
export const removeItemStorage = (key) => {
    localStorage.removeItem(key);
}
export const allRemoveItemStorage = () => {
    localStorage.clear();
}