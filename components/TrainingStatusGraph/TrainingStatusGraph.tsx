import { Empty, PageHeader, Tabs } from 'antd';
import React from 'react';
import { TotalDataProps } from 'types';
import Graph from './Graph';

interface ITrainingStatusGraphProps {
  data: Array<TotalDataProps>;
}

const TrainingStatusGraph = ({ data }: ITrainingStatusGraphProps) => {
  const SUB_TABS = [
    {
      key: '1',
      label: '종합',
      children: <Graph data={data} />,
    },
    { key: '2', label: '집행기능' },
    {
      key: '3',
      label: '주의집중력',
    },
    {
      key: '4',
      label: '언어능력',
    },
    {
      key: '5',
      label: '시공간능력',
    },
    {
      key: '6',
      label: '기억력',
    },
  ];

  const TABS = [
    {
      key: '1',
      label: '콘텐츠 이용 추이',
      children: (
        <Empty
          description={false}
          style={{ height: '440px', display: 'grid', placeItems: 'center' }}
        />
      ),
    },
    {
      key: '2',
      label: '인지훈련 수행 현황',
      children: (
        <PageHeader style={{ backgroundColor: '#FFFFFF' }} title="인지훈련 수행 현황">
          <Tabs
            type="card"
            defaultActiveKey={'1'}
            style={{ height: '440px', backgroundColor: '#FFFFFF' }}
            items={SUB_TABS}
          />
        </PageHeader>
      ),
    },
    {
      key: '3',
      label: '생활관리 수행 현황',
      children: (
        <Empty
          description={false}
          style={{ height: '440px', display: 'grid', placeItems: 'center' }}
        />
      ),
    },
  ];
  return <Tabs defaultActiveKey={'2'} style={{ margin: '24px 36px' }} items={TABS} />;
};

export default TrainingStatusGraph;
