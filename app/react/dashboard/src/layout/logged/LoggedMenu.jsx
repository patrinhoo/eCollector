import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { ToolOutlined, TableOutlined, CameraOutlined } from '@ant-design/icons';

import { Logo } from '../../common/icons/Logo';
import classNames from 'classnames';

const { Sider } = Layout;

const MENU_COLLAPSED_WIDTH = 50;
const LOGO_COLLAPSED_WIDTH = 20;

export const LoggedMenu = ({ collapsed, setCollapsed }) => {
  return (
    <Sider
      breakpoint='md'
      collapsedWidth={MENU_COLLAPSED_WIDTH}
      onCollapse={(value) => setCollapsed(value)}
      collapsible
    >
      <div className='tw-flex tw-justify-center tw-mt-8 tw-mb-12'>
        <Link to={'/dashboard'}>
          <div
            className={classNames(
              'tw-bg-gray-mediumDark tw-rounded-full tw-border-4 tw-border-yellow-medium',
              {
                'tw-p-4': !collapsed,
                'tw-p-2': collapsed,
              }
            )}
          >
            <Logo
              width={collapsed ? LOGO_COLLAPSED_WIDTH : 100}
              height={collapsed ? LOGO_COLLAPSED_WIDTH : 100}
            />
          </div>
        </Link>
      </div>
      <Menu
        theme='dark'
        defaultSelectedKeys={['1']}
        mode='inline'
        items={[
          {
            key: '1',
            icon: <TableOutlined />,
            label: <Link to={'/dashboard'}>Moje karty</Link>,
          },
          {
            key: '2',
            icon: <CameraOutlined />,
            label: <Link to={'/pendingCards'}>Oczekujące</Link>,
          },
          {
            key: '3',
            icon: <ToolOutlined />,
            label: (
              <Link to={'/settings'} className='tw-mb-12'>
                Ustawienia
              </Link>
            ),
          },
        ]}
      />
    </Sider>
  );
};
