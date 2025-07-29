import React from "react";
import "./Button.css";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

export default class Button extends React.Component<ButtonProps> {
  render() {
    const { onClick, text } = this.props;

    return <button className="button" onClick={onClick}>{text}</button>;
  }
}
