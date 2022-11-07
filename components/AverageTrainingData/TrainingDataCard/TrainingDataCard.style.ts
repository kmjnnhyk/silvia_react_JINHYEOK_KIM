import styled from 'styled-components';

interface Props {
  isIncreased: boolean;
}

export const Container = styled.div<Props>`
  position: relative;
  padding: 8px;
  width: 156px;
  height: 118px;
  display: flex;
  flex-direction: column;
  gap: 0;
  background-color: ${({ isIncreased }) =>
    isIncreased ? 'var(--color-geek-blue-400)' : 'var(--color-red-400)'};
  border-radius: 4px;
  overflow: hidden;
  color: #ffffff;
`;

export const Title = styled.p`
  margin: 0;
`;

export const Count = styled.h2`
  color: #ffffff;
  margin-bottom: 10px;
  font-size: 30px;
`;

export const Increment = styled.p`
  margin: 0;
`;
