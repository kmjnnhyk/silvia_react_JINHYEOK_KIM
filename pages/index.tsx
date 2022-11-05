import React from 'react';

import 'antd/dist/antd.css';
import { Layout } from 'antd';

import MyHeader from 'components/layout/Header';
import MySider from 'components/layout/Sider';
import MyContent from 'components/layout/Content';

const App: React.FC = () => (
  <Layout>
    <MyHeader />
    <Layout>
      <MySider />
      <Layout style={{ padding: '26px 24px' }}>
        <MyContent>
          <div>hi</div>
        </MyContent>
      </Layout>
    </Layout>
  </Layout>
);

export default App;
