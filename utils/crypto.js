import CryptoJS from 'crypto-js';

class Crypto {
  encrypt = (payload) => {
    const encryptData = CryptoJS.AES.encrypt(
      payload,
      'sdfgdhfd4%^&GHJKLJ_e5r6'
      // process.env.REACT_APP_CRYPTO_SALT
    ).toString();

    return encryptData;
  };

  decrypt = (payload) => {
    const bytes = CryptoJS.AES.decrypt(payload, 'sdfgdhfd4%^&GHJKLJ_e5r6');
    const decryptData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return decryptData;
  }
}

export default new Crypto();