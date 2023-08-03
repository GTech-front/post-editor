import { useCallback, useState } from "react";

function getInitialValue<T>(storeKey: string, key: string, initialValue: T) {
  if (typeof window === "undefined") return initialValue;

  try {
    const item = window.localStorage.getItem(storeKey);
    if (item === null) {
      return initialValue;
    }

    const parsedItem = JSON.parse(item);
    return parsedItem[key] ?? initialValue;
  } catch (error) {
    return initialValue;
  }
}

export function useLocalStorage<T>(
  storeKey: string,
  key: string,
  initialValue: T
) {
  const [storedValue, setStoredValue] = useState<T>(() =>
    getInitialValue(storeKey, key, initialValue)
  );

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        setStoredValue((v) => {
          const valueToStore = value instanceof Function ? value(v) : value;

          if (typeof window !== "undefined") {
            const item = window.localStorage.getItem(storeKey);
            const store = item ? JSON.parse(item) : {};
            store[key] = valueToStore;

            window.localStorage.setItem(storeKey, JSON.stringify(store));
          }

          return valueToStore;
        });
      } catch (error) {
        console.log(error);
      }
    },
    [storeKey, key]
  );
  return [storedValue, setValue] as const;
}
