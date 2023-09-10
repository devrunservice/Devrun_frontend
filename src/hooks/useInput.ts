import  { useState, useCallback, ChangeEvent } from "react";

const useInput = (initialValue:any) => {
  const [value, setValue] = useState(initialValue);
  const headler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [value]
  );
  return [value, headler, setValue];
};
export default useInput;
