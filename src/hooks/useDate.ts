

const useDate = ()=>{
    const getYear = new Date().getFullYear()
    const getMonth = new Date().getMonth()+1
    const getdate = new Date().getDate()
    return {getYear, getMonth, getdate};
}
export default useDate;