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

// baseAxios.interceptors.response.use(
//   (response) =>  response,
//   (error) => {
//     const errorMessage = error.response.data.message;
//     const errorStatus = error.response.data.status; 
//     switch (errorStatus) {
//       case 401:
//         switch (errorMessage) {
//           case "Verification failed":
//             return console.log("잘못된 비밀번호 입니다.");
//           default:
//             return console.log("");
//         }
//       default:
//         return console.log("")
//     }
//   },
// );
