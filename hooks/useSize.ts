import { useLayoutEffect, useState } from 'react';
import { getSize } from './utils';

const useSize = (element: HTMLDivElement) => {
  const [size, setSize] = useState(getSize(element));

  useLayoutEffect(() => {
    const onResize = () => setSize(getSize(element));
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  });
  return size;
};

export default useSize;
