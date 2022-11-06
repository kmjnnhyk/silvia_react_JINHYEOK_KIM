import React from 'react';

import { Layout, Menu, MenuProps } from 'antd';
import { HomeOutlined, TeamOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const SIDE_MENU_LIST: MenuProps['items'] = [
  { label: '홈', icon: HomeOutlined },
  { label: '내담자 관리', icon: TeamOutlined },
].map((item, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(item.icon),
    label: item.label,
  };
});

const MySider = () => {
  return (
    <Sider width={200} className="drop-shadow__015">
      <Menu
        mode="inline"
        defaultSelectedKeys={['sub2']}
        style={{ height: '100%', backgroundColor: 'var(--color-geek-blue-1000)', color: '#FFFFFF' }}
        items={SIDE_MENU_LIST}
      />
    </Sider>
  );
};

export default MySider;
