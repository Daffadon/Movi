import React from "react";
import { ButtonProps } from "../data/dto/buttonProps";

const Button: React.FC<ButtonProps> = ({ text, type, style }) => {
  return (
    <button
      type={type}
      className={`${
        type == "submit" &&
        "bg-yellow-500 rounded-md py-1 hover:bg-white border-yellow-500 hover:text-yellow-500 duration-200 font-semibold border-2 hover:border-yellow-500 hover:border-2"
      } ${style}`}
    >
      {text}
    </button>
  );
};

export default Button;
