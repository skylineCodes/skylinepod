{
  /*
 `Storage` User will determine what storage object will he/she be using. 
 This way, user cant pass unnecessary string values
*/
}
type StorageType = 'session' | 'local';

{
  /*
 `UseStorageReturnValue` This is just a return value type for our hook. 
 We can add additional typings later.
*/
}
type UseStorageReturnValue = {
  getItem: (key: string, type?: StorageType) => string;

  setItem: (key: string, value: string, type?: StorageType) => boolean;

  removeItem: (key: string, type?: StorageType) => void;
};

const useStorage = (): UseStorageReturnValue => {
    const storageType = (
      type?: StorageType
    ): 'localStorage' | 'sessionStorage' => `${type ?? 'session'}Storage`;

  const isBrowser: boolean = ((): boolean => typeof window !== 'undefined')();

  const getItem = (key: string, type?: StorageType): string => {
    const storageType: 'localStorage' | 'sessionStorage' = `${
      type ?? 'session'
    }Storage`;
    return isBrowser ? window[storageType][key] : '';
  };

  const setItem = (key: string, value: string, type?: StorageType): boolean => {
    if (isBrowser) {
      window[storageType(type)].setItem(key, value);
      return true;
    }

    return false;
  };

  const removeItem = (key: string, type?: StorageType): void => {
    window[storageType(type)].removeItem(key);
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};

export default useStorage;
