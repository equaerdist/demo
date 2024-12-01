import { useDeferredValue, useState } from "react";

export const useSearchBox = (): [string, (v: string) => void] => {
  const [inputValue, setInputValue] = useState<string>("");
  const deferredValue = useDeferredValue(inputValue); // Отложенное значение для оптимизации
  return [deferredValue, setInputValue];
};
