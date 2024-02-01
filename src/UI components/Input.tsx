import React from "react";

interface InputProps {
  changeValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const Input = ({ changeValue, value }: InputProps) => {

  return (
    <div>
      <input className="border border-slate-500 w-56 h-12 p-2"
        type="text"
        placeholder="Search"
        required
        value={value}
        onChange={changeValue}
      />
    </div>
  );
};

export default Input;

