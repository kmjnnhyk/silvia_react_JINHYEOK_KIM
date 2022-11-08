import { ARBITRATION_FIGURE } from 'components/TrainingStatusGraph/Graph/Graph';
import { TotalDataProps } from 'types';

export const getSize = (el: HTMLDivElement) => {
  const width = el?.offsetWidth;
  const height = el?.offsetHeight;
  return { height, width };
};

export const countReaching = (array: TotalDataProps[]) => {
  return array.filter((el) => el.runningTime >= ARBITRATION_FIGURE).length;
};
