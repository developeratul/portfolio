const storage = {
  set(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  get(key: string) {
    return JSON.parse(localStorage.getItem(key) as string);
  },
  remove(key: string) {
    window.localStorage.removeItem(key);
  },
  clear() {
    window.localStorage.clear();
  },
};

export default storage;
