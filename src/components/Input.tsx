import React from "react";
import "./Input.css";

interface InputProps {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input({ placeholder, onChange }: InputProps) {
  return <input className="input" id="input" type="text" placeholder={placeholder} onChange={onChange}  />
}