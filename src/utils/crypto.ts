import CryptoJS from 'crypto-js';
import {SignupFormType} from 'types';

export const crypto = {
  encryptedUserData: (userData: SignupFormType, secretKey: string) => {
    if (!userData || !secretKey) {
      return null;
    }
    const key = CryptoJS.enc.Utf8.parse(secretKey.substring(0, 16));
    const userDataAsString = JSON.stringify(userData);
    const encrypted = CryptoJS.AES.encrypt(userDataAsString, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }).toString();
    // const utf8 = CryptoJS.enc.Base64.stringify(
    //   CryptoJS.enc.Utf8.parse(encrypted)
    // );
    const urlSafeBase64 = encrypted
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
    return urlSafeBase64;
  },

  decryptedUserData: (userData: string, secretKey: string) => {
    if (!userData || !secretKey) {
      return null;
    }

    try {
      const key = CryptoJS.enc.Utf8.parse(secretKey.substring(0, 16));

      const base64Data = userData
        .replace(/-/g, '+')
        .replace(/_/g, '/')
        .padEnd((userData.length + 3) & ~3, '=');

      // const utf8 = CryptoJS.enc.Base64.parse(base64Data).toString(
      //   CryptoJS.enc.Utf8
      // );

      const decrypted = CryptoJS.AES.decrypt(base64Data, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      }).toString(CryptoJS.enc.Utf8);

      return JSON.parse(decrypted);
    } catch (error) {
      console.log(error);
    }
  },
};
