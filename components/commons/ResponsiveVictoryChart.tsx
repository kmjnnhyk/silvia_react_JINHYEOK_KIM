import useSize from 'hooks/useSize';
import React, { useRef } from 'react';
import { VictoryChart, VictoryChartProps } from 'victory';

const ResponsiveVictoryChart = (initialProps: VictoryChartProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useSize(ref.current as HTMLDivElement);
  const props = {
    ...initialProps,
    width,
    height,
  };

  return (
    <div className="chart" ref={ref}>
      <VictoryChart {...props} />
    </div>
  );
};

export default ResponsiveVictoryChart;
