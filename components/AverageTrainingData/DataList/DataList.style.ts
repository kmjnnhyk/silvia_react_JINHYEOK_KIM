import styled from 'styled-components';

interface Props {
  isIncreased: boolean;
}

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(136px, 1fr));
  flex-wrap: wrap;
  gap: 23px;
  padding: 0;
  list-style: none;
`;

export const Li = styled.li`
  flex-grow: 1;
`;

export const Container = styled.div<Props>`
  position: relative;
  padding: 8px;
  /* width: 156px; */
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
