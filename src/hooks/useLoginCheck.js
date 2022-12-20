import React, { useState } from "react";

const useLoginCheck = () => {
  const [isValid, setIsValid] = useState({
    userId: false,
    password: false,
    passwordCheck: false,
  });

  const lengthCheck = (input, words, max) => {
    if (2 <= words.length && words.length <= max) {
      setIsValid({ ...isValid, [input]: true });
    } else {
      setIsValid({ ...isValid, [input]: false });
    }
  };

  const passwordCheck = (password, passwordCheck) => {
    if (password === passwordCheck) {
      setIsValid({ ...isValid, passwordCheck: true });
    }
  };

  const validReset = () => {
    setIsValid({ userId: false, password: false, passwordCheck: false });
  };

  return { isValid, lengthCheck, passwordCheck, validReset };
};

export default useLoginCheck;
