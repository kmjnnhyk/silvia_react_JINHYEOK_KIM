import useSize from 'hooks/useSize';
import React, { useRef } from 'react';
import { VictoryChart, VictoryChartProps } from 'victory';

const ResponsiveVictoryChart = (initialProps: VictoryChartProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useSize(ref.current as HTMLDivElement);
  const props = {
    ...initialProps,
    width,
    height: 400,
  };

  return (
    <div className="chart" ref={ref} style={{ maxWidth: '1024px', height: '400px' }}>
      <VictoryChart {...props} />
    </div>
  );
};

export default ResponsiveVictoryChart;
