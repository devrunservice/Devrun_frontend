

const useDate = () => {
  const getYear = new Date().getFullYear();
  const getMonth = new Date().getMonth() + 1;
  const getdate = new Date().getDate();

  const Dday = (createdDate: string) => {
    const currentTime = new Date();
    const creatTime = new Date(createdDate);
    const differenTime = creatTime.getTime() - currentTime.getTime();
    // 밀리초를 분, 일 등으로 변환
    const secondsDifference = Math.floor(differenTime / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
    if (daysDifference > 0) return `D-${daysDifference}`;
  };
  const time = (createdDate: string) => {
    const currentTime = new Date();
    const creatTime = new Date(createdDate);
    const differenTime = currentTime.getTime() - creatTime.getTime();
    // 밀리초를 분, 일 등으로 변환
    const secondsDifference = Math.floor(differenTime / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
    if (daysDifference > 0) return `${daysDifference}일 전`;
    if (hoursDifference > 0) return `${hoursDifference}시간 전`;
    if (minutesDifference > 0) return `${minutesDifference}분 전`;
    if (secondsDifference > 0) return `${secondsDifference}초 전`;
  };
  return { getYear, getMonth, getdate, Dday, time };
};
export default useDate;