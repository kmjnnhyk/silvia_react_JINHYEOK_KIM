import React, { useEffect } from 'react';
import { NextPage } from 'next';
import ProfileHeader from 'components/ProfileHeader';
import MeetingHistory from 'components/MeetingHistory';
import AverageTrainingData from 'components/AverageTrainingData';
import TrainingStatusGraph from 'components/TrainingStatusGraph';

const DashBoard: NextPage = (data) => {
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <ProfileHeader />
      <MeetingHistory />
      <AverageTrainingData />
      <TrainingStatusGraph />
    </>
  );
};

DashBoard.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:3000/api', { method: 'GET' });
  const json = await res.json();
  return { data: json };
};

export default DashBoard;
