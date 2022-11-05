import { Layout } from 'antd';
import React from 'react';

const { Content } = Layout;

interface props {
  children: React.ReactNode;
}

const MyContent = ({ children }: props) => {
  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
      }}
    >
      {children}
    </Content>
  );
};

export default MyContent;
