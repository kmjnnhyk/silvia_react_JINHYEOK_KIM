import { StaticImageData } from 'next/image';

export interface ProfileProps {
  nickname: string;
  age: number;
  isMale: boolean;
  birthOfYear: number;
  birthOfMonth: number;
  birthOfDate: number;
  contact: `${string}-${string}-${string}`;
  uid: string;
  imageSrc?: string;
}

export interface MeetingProps {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
  title: string;
  fileFormat: string;
  fileSize: string;
}

type CardType = 'time' | 'count';

export interface CardProps {
  type: CardType;
  iconSrc: StaticImageData;
  title: string;
  count: number;
  increment: number;
}

export interface TotalDataProps {
  date: string;
  runningTime: number;
}
