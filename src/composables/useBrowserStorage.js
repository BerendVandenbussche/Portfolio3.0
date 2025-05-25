const storageMapping = {
  localStorage: window.localStorage,
  sessionStorage: window.sessionStorage,
};

export const useBrowserStorage = () => {
  const setStorageItem = (key, value, storageType = "localStorage") => {
    const storage = storageMapping[storageType];
    storage.setItem(key, value);
  };

  const getStorageItem = (key, storageType = "localStorage") => {
    const storage = storageMapping[storageType];
    return storage.getItem(key);
  };
  
  return { setStorageItem, getStorageItem };
};
