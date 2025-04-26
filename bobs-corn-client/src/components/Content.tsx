import React from 'react';

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 border-4 border-yellow-500 p-6 rounded-lg mt-4">
      {children}
    </div>
  );
};

export default Content;