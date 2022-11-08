import React, { useEffect, useState } from 'react';
import { getSize } from './utils';

const useSize = (element: HTMLDivElement) => {
  const [size, setSize] = useState(getSize(element));

  useEffect(() => {
    const onResize = () => setSize(getSize(element));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  });
  return size;
};

export default useSize;
