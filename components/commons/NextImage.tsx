import Image, { StaticImageData } from 'next/image';
import React, { CSSProperties } from 'react';

interface INextImageProps {
  src: StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
}

const NextImage = ({ src, alt, width, height, style }: INextImageProps) => {
  return <Image src={src} alt={alt} width={width} height={height} style={style} />;
};

export default NextImage;
