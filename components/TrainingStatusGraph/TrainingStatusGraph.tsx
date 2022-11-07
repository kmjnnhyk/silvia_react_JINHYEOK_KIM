import { Empty, Tabs } from 'antd';
import React from 'react';

const TrainingStatusGraph = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <Tabs
      onChange={onChange}
      type="card"
      items={new Array(3).fill(null).map((_, i) => {
        const id = String(i + 1);
        return {
          label: `Tab ${id}`,
          key: id,
          children: <div style={{ height: '500px', backgroundColor: 'orange' }}></div>,
        };
      })}
    />
    // <Empty></Empty>
  );
};

export default TrainingStatusGraph;
