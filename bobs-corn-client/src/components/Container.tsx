import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-between">
      {children}
    </div>
  );
};

export default Container;