export const useLocalStorage = <T = any>(key: string, value?: T) => {
  if (value) localStorage.setItem(key, JSON.stringify(value));
  return JSON.parse(localStorage.getItem(key)!) as T;
};
