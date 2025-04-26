import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-500 text-white py-6 px-4 rounded-xl shadow-md text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
    </div>
  );
};

export default Header;
