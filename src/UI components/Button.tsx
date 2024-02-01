import React from "react";

interface ButtonProps {
  width?: string;
  height?: string;
  addContent?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  newFetch?: () => void;
}

const Button = ({ addContent }: ButtonProps) => {
  return (
    <div>
      <button className="border h-12 w-20 bg-rose-300"
        onClick={addContent}
      >Add
      </button>
    </div>
  );
};

export default Button;