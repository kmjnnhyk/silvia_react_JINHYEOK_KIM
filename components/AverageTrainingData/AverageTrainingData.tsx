import { Segmented, Space } from 'antd';
import React from 'react';
import TrainingDataCard from './TrainingDataCard';
import cardSrc from 'assets/images/card/cognitive.svg';

const AverageTrainingData = () => {
  return (
    <Space direction="vertical" style={{ padding: '21px 24px' }}>
      <div style={{ marginBottom: '16px' }}>
        <span>데이터 탐색 기간 설정</span>
        <Segmented
          style={{ backgroundColor: '#FFFFFF', marginLeft: '44px' }}
          options={['주 단위', '월 단위']}
          defaultValue={'월 단위'}
        />
      </div>
      <div>
        <TrainingDataCard
          title={'평균 인지 훈련 시간'}
          iconSrc={cardSrc}
          type="time"
          count={80}
          increment={20}
        />
      </div>
    </Space>
  );
};

export default AverageTrainingData;
