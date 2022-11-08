import { Segmented, Space } from 'antd';
import React from 'react';
import { CardProps } from 'types';
import DataList from './DataList';

interface IAverageTrainingDataProps {
  data: Array<CardProps>;
}

const AverageTrainingData = ({ data }: IAverageTrainingDataProps) => {
  return (
    <Space
      direction="vertical"
      style={{ padding: '21px 24px', backgroundColor: 'var(--color-gray-200)' }}
    >
      <div style={{ marginBottom: '16px' }}>
        <span>데이터 탐색 기간 설정</span>
        <Segmented
          style={{ backgroundColor: '#FFFFFF', marginLeft: '44px' }}
          options={['주 단위', '월 단위']}
          defaultValue={'월 단위'}
        />
      </div>
      <div>
        <DataList data={data} />
      </div>
    </Space>
  );
};

export default AverageTrainingData;
