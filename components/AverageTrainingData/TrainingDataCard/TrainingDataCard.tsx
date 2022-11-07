import NextImage from 'components/commons/NextImage';
import { StaticImageData } from 'next/image';
import React from 'react';
import { Container, Title, Count, Increment } from './TrainingDataCard.style';

type CardType = 'time' | 'count';

export interface ITrainingDataCardProps {
  type: CardType;
  iconSrc: StaticImageData;
  title: string;
  count: number;
  increment: number;
}

const TrainingDataCard = ({ ...props }: ITrainingDataCardProps) => {
  return (
    <Container isIncreased={props.increment >= 0}>
      <Title>{props.title}</Title>
      <Count>
        {props.count}
        {props.type === 'time' ? '분' : '회'}
      </Count>
      <Increment>
        {props.increment >= 0 ? '+' : '-'}
        {props.increment}
      </Increment>
      <NextImage
        src={props.iconSrc}
        alt="icon"
        style={{ position: 'absolute', right: '0', bottom: '0' }}
      />
    </Container>
  );
};

export default TrainingDataCard;
