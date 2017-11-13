export default {
    getItem(key) {
        let value = '';
        try {
            value = localStorage.getItem(key);
        } catch (ex) {
            console.error('localStorage.getItem Error', ex);
        }
        return value;
    },
    setItem(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (ex) {
            console.error('localStorage.setItem Error', ex);
        }
    }
}
