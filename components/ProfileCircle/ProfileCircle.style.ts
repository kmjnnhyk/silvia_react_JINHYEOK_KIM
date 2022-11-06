import styled from 'styled-components';
import { IProfileCircleProps } from './ProfileCircle';

export const CircleWrapper = styled.div<Pick<IProfileCircleProps, 'style' | 'radius'>>`
  display: grid;
  place-items: center;
  overflow: hidden;

  width: ${({ radius }) => `${radius}px`};
  height: ${({ radius }) => `${radius}px`};
  border-radius: ${({ radius }) => `${radius}px`};
`;
