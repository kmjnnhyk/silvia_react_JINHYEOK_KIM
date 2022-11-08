import { ARBITRATION_FIGURE } from 'components/TrainingStatusGraph/Graph/Graph';
import { TotalDataProps } from 'types';
import { Bar } from 'victory';

interface ICustomBarProps {
  datum?: TotalDataProps;
}

const CustomBar = (props: ICustomBarProps) => {
  return (
    <Bar
      {...props}
      style={{
        fill: (props.datum?.runningTime as number) > ARBITRATION_FIGURE ? '#788CFF' : '#D9D9D9',
      }}
    />
  );
};

export default CustomBar;
