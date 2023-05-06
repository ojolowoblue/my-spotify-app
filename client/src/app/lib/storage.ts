const STORAGE = localStorage;

const storage = {
  get(key: string) {
    const item = STORAGE.getItem(key);
    return item ?? "";
  },
  set(key: string, value: Object) {
    STORAGE.setItem(key, JSON.stringify(value));
  },
  remove(key: string) {
    STORAGE.removeItem(key);
  },
  clear() {
    STORAGE.clear();
  },
};

export default storage;
