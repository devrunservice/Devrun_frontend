const useDate = () => {

  const getYear = new Date().getFullYear();
  const getMonth = new Date().getMonth() + 1;
  const getdate = new Date().getDate();

  const videoTime = (total: number) => {
    const hours = Math.floor(total / 3600);
    const min = Math.floor((total % 3600) / 60);
    const sec = total % 60;
    if (hours > 0) return `${hours}시간 ${min}분 ${sec}초`;
    if (min > 0) return `${min}분 ${sec}초`;
    return `${sec}초`;
  };

  const calculateTimeDifference = (createdDate: string) => {
    const currentTime = new Date();
    const createTime = new Date(createdDate);
    const timeDifference = currentTime.getTime() - createTime.getTime();
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
    if (daysDifference > 0) return `D-${daysDifference}`;
    if (hoursDifference > 0) return `${hoursDifference}시간 전`;
    if (minutesDifference > 0) return `${minutesDifference}분 전`;
    if (secondsDifference > 0) return `${secondsDifference}초 전`;
  };

  const formattedDate = (date: string) => {
    const dateObject = new Date(date);

    const padZero = (number: number) => {
      return number < 10 ? `0${number}` : number;
    };

    return `${dateObject.getFullYear()}-${padZero(
      dateObject.getMonth() + 1
    )}-${padZero(dateObject.getDate())}`;
  };

  return {
    getYear,
    getMonth,
    getdate,
    calculateTimeDifference,
    videoTime,
    formattedDate,
  };
};
export default useDate;
