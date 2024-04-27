import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { ToolOutlined, TableOutlined, CameraOutlined } from '@ant-design/icons';

import { Logo } from '../../common/icons/Logo';
import { MenuItem } from './MenuItem';

const { Sider } = Layout;

export const LoggedMenu = () => {
  return (
    <Sider className='tw-hidden sm:tw-block tw-rounded-r-3xl'>
      <div className='tw-flex tw-justify-center tw-mt-8 tw-mb-12'>
        <Link to={'/dashboard'}>
          <div className='tw-p-4 tw-bg-gray-mediumDark tw-rounded-full tw-border-4 tw-border-yellow-medium'>
            <Logo width={100} height={100} />
          </div>
        </Link>
      </div>

      <MenuItem
        title={'Moje karty'}
        url={'/dashboard'}
        icon={<TableOutlined />}
      />
      <MenuItem
        title={'Oczekujące'}
        url={'/pendingCards'}
        icon={<CameraOutlined />}
      />
      <MenuItem
        title={'Ustawienia'}
        url={'/settings'}
        icon={<ToolOutlined />}
      />
    </Sider>
  );
};
