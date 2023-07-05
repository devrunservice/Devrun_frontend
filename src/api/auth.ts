import { TokenType } from "types";

export const isTokenExpired = (accessToken: TokenType): boolean => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  const month = String(currentTime.getMonth() + 1).padStart(2, "0");
  const day = String(currentTime.getDate()).padStart(2, "0");
  const hours = ("0" + currentTime.getHours()).slice(-2);
  const minutes = ("0" + currentTime.getMinutes()).slice(-2);
  const seconds = ("0" + currentTime.getSeconds()).slice(-2);
  const getCurrentTime = new Date(
    `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`,
  );
  return accessToken.expire < getCurrentTime;
};
