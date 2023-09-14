import CryptoJS from 'crypto-js';
import {SignupFormType} from 'types';

export const crypto = {
  encryptedUserData: (userData: SignupFormType, secretKey: string) => {
    console.log(userData);
    if (!userData || !secretKey) {
      return null;
    }
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(userData),
      secretKey
    ).toString();
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encrypted));
  },

  decryptedUserData: (userData: string, secretKey: string) => {
    console.log(userData);
    if (!userData || !secretKey) {
      return null;
    }

    try {
      const bytes = CryptoJS.enc.Base64.parse(userData).toString(
        CryptoJS.enc.Utf8
      );
      const decrypted = CryptoJS.AES.decrypt(bytes, secretKey).toString(
        CryptoJS.enc.Utf8
      );
      console.log(JSON.parse(decrypted));
      return JSON.parse(decrypted);
    } catch (error) {
      console.log(error);
    }
  },
};
