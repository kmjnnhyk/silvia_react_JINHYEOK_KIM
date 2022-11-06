import Image from 'next/image';
import React, { CSSProperties } from 'react';
import { CircleWrapper } from './ProfileCircle.style';
import profileImgSrc from '/assets/images/header/profile_image.jpeg';

export interface IProfileCircleProps {
  info?: ProfileProps;
  style?: CSSProperties;
  radius: number;
}

const ProfileCircle = ({ radius, info, style }: IProfileCircleProps) => {
  return (
    <CircleWrapper radius={radius}>
      <Image src={profileImgSrc} alt="profile" width={radius} height={radius} />
    </CircleWrapper>
  );
};

export default ProfileCircle;
