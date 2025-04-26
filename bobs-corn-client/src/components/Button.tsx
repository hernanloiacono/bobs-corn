import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="bg-green-600 text-white px-10 py-2 rounded-lg hover:bg-green-700 transition font-bold"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;