import {useState} from "react";

const usePage = ()=>{
    const [pageno, setPageno] = useState<number>(1);
    return { pageno, setPageno };
}
export default usePage;