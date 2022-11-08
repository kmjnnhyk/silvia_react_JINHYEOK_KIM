import React from 'react';
import { Container } from './Circle.style';

export interface ICountCircleProps {
  radius: number;
  borderColor?: string;
  borderWidth?: number;
  children: React.ReactNode;
}

const Circle = ({
  radius,
  borderColor = '#757575',
  borderWidth = 6,
  children,
}: ICountCircleProps) => {
  return (
    <Container radius={radius} borderColor={borderColor} borderWidth={borderWidth}>
      {children}
    </Container>
  );
};

export default Circle;
