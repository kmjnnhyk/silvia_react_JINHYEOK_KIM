import { useState } from 'react';
import { TotalDataProps } from 'types';

interface ICustomPointProps {
  datum?: TotalDataProps;
  x?: number;
  y?: number;
}

const CustomPoint = (props: ICustomPointProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <circle
      cx={props.x}
      cy={props.y}
      r={!hovered ? 5 : 10}
      stroke={!hovered ? '#4D61FF' : '#FFFFFF'}
      strokeWidth={!hovered ? 1 : 3}
      fill={!hovered ? '#FFFFFF' : '#4D61FF'}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
};

export default CustomPoint;
