import React from 'react';
import { NextPage } from 'next';
import 'antd/dist/antd.css';
import MyLayout from 'components/layout/MyLayout';

const DashBoard: NextPage = () => (
  <MyLayout>
    <div>
      <h1>여기는 index 페이지</h1>
    </div>
  </MyLayout>
);

export default DashBoard;
