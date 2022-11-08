import React from 'react';

interface ICountCircleProps {
  children: React.ReactNode;
}

const CountCircle = ({ children }: ICountCircleProps) => {
  return (
    <div
      className="auto-layout"
      style={{
        width: '160px',
        height: '160px',
        borderRadius: '80px',
        border: '6px solid #757575',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default CountCircle;
