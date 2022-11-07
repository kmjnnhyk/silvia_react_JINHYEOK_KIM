import { Segmented } from 'antd';
import React from 'react';

const AverageTrainingData = () => {
  return <Segmented options={['주 단위', '월 단위']} defaultValue={'주 단위'} />;
};

export default AverageTrainingData;
