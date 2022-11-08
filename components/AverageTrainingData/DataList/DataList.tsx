import React from 'react';
import { Container, Count, Increment, Li, Title, Ul } from './DataList.style';
import NextImage from 'components/commons/NextImage';
import { CardProps } from 'types';

interface IDataListProps {
  data: Array<CardProps>;
}

const DataList = ({ data }: IDataListProps) => {
  return (
    <Ul>
      {data.map((item, idx) => (
        <Li key={idx}>
          <Container isIncreased={item.increment >= 0}>
            <Title>{item.title}</Title>
            <Count>
              {item.count}
              {item.type === 'time' ? '분' : '회'}
            </Count>
            <Increment>
              {item.increment >= 0 ? '+' : ''}
              {item.increment}
              {item.type === 'time' ? '분' : '회'}
            </Increment>
            <NextImage
              src={item.iconSrc}
              alt="icon"
              style={{ position: 'absolute', right: '0', bottom: '-2px' }}
              width={64}
              height={62}
            />
          </Container>
        </Li>
      ))}
    </Ul>
  );
};

export default DataList;
