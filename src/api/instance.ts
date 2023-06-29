import axios from "axios";

export const baseAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

export const accAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    "Content-type": "application/json",
  },
});


