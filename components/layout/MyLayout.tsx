import React from 'react';

import 'antd/dist/antd.css';
import { Layout } from 'antd';

import MyHeader from 'components/layout/Header';
import MySider from 'components/layout/Sider';

interface ILayoutProps {
  children: React.ReactNode;
}

const MyLayout = ({ children }: ILayoutProps) => {
  return (
    <Layout>
      <MyHeader />
      <Layout>
        <MySider />
        <Layout style={{ padding: '26px 24px' }}>{children}</Layout>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
