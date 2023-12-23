import React, { FC } from "react";

interface InputProps {
  label?: string;
  value?: string;
  type?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ label, value, onChange, type }) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={label}
        className="text-base hover:text-yellow-500 duration-200 mb-1"
      >
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        type={type ? type : "text"}
        id={label}
        className="text-black text-xs px-2 py-2 focus:outline-none rounded-md border-2 border-yellow-500"
      />
    </div>
  );
};

export default Input;
