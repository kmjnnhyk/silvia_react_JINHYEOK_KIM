import { Popover } from 'antd';
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
    <Popover
      content={
        <div style={{ width: '30px', display: 'grid', placeItems: 'center' }}>
          {props.datum?.runningTime}
        </div>
      }
    >
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
    </Popover>
  );
};

export default CustomPoint;
