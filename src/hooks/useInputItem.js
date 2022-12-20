import React, { useState } from "react";

const useInputItem = () => {
  const [input, setInput] = useState({
    title: "",
    price: 0,
    content: "",
    category: "0",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const reset = () => {
    setInput({ title: "", price: 0, content: "", label: "" });
  };
  return { input, setInput, onChangeHandler, reset };
};

export default useInputItem;
