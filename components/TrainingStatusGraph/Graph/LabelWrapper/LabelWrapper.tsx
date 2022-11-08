import React from 'react';
import { VictoryLabel } from 'victory';

interface ILabelWrapperProps {
  transform: string;
  text: string;
}

const LabelWrapper = ({ transform, text }: ILabelWrapperProps) => {
  return (
    <g transform={transform}>
      <VictoryLabel text={text} />
    </g>
  );
};

export default LabelWrapper;
