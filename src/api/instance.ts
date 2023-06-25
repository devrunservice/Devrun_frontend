import axios from "axios";

export const baseAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: { "Content-Type": "application/json" },
});

baseAxios.interceptors.response.use(
  (Response) => Response,
  (error) => {
    const errorMessage = error.response.data.message;
    const errorStatus = error.response.data.message; // eslint-disable-line @typescript-eslint/no-unused-vars
    return errorMessage;
  },
);
