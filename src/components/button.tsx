import React from "react";

interface ButtonProps {
  color: any;
  text: any;
  textColor: any;
  onClick: any;
}
const Button = ({ color, text, textColor, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{ background: color, color: textColor }}
      className="btn"
    >
      {text}
    </button>
  );
};

export default Button;
