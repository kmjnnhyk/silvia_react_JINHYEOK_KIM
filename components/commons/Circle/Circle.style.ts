import styled from 'styled-components';
import { ICountCircleProps } from './Circle';

export const Container = styled.div<Partial<ICountCircleProps>>`
  width: ${({ radius }) => `${radius}px`};
  height: ${({ radius }) => `${radius}px`};
  border-radius: ${({ radius }) => `${radius}px`};
  border-color: ${({ borderColor }) => borderColor};
  border-width: ${({ borderWidth }) => `${borderWidth}px`};

  background-color: 'black';

  display: grid;
  place-items: center;
`;
