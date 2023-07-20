import base64 from "base-64";
// import jwt from "jsonwebtoken";
import { getCookie } from "./cookies";

export const decode = (name: string) => {
  const token = getCookie(name);
  if (token) {
    const base64Payload = token.split(".")[1];
    const payload = base64Payload.replace(/-/g, "+").replace(/_/g, "/");
    const decodedPayload = base64.decode(payload);
    return JSON.parse(decodedPayload).sub;
  }
};
