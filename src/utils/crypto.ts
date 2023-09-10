import CryptoJS from 'crypto-js';
import {SignupFormType} from 'types';

const SECRETKEY = process.env.REACT_APP_CRYPTO_SECRET_KEY;
// const PRIVATEKEY = SECRETKEY;

export const crypto = {
  encryptedUserData: (userData: SignupFormType) => {
    if (!userData || !SECRETKEY) {
      return null;
    }
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(userData),
      SECRETKEY
    ).toString();
    return encrypted;
  },

  decryptedUserData: (userData: string) => {
    if (!userData || !SECRETKEY) {
      return null;
    }

    const bytes = CryptoJS.AES.decrypt(userData, SECRETKEY);
    const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decrypted;
  },
};
