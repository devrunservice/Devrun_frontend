import  { useState, useCallback, ChangeEvent } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const headler = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
    [value]
  );
  return [value, headler, setValue] as const;
};
export default useInput;
