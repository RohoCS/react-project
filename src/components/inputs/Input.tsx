import React, { FocusEventHandler } from "react";
import "./Input.css";

type IInputProps = {
  placeholder: string;
};

const Input = ({ placeholder }: IInputProps) => {
  const onBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value.trim();
    if (!value) {
      alert("Input is empty");
      return;
    }
    alert("Input changed");
  };

  return (
    <input
      className="input"
      id="input"
      type="text"
      placeholder={placeholder}
      onBlur={onBlur}
    />
  );
};

export default Input;
