import  { useState, useCallback, ChangeEvent } from "react";

const useInput = (initialValue:any) => {
  const [value, setValue] = useState(initialValue);
  const headler = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value)
  },[])
  return [value, headler];
};
export default useInput;
