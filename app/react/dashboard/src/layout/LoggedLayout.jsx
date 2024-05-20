import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'antd';

import { LoggedMenu } from './logged/LoggedMenu';
import { LoggedHeader } from './logged/LoggedHeader';

import { Dashboard } from '../routes/cards/Dashboard';
import { CardCreate } from '../routes/cards/CardCreate';
import { CardShow } from '../routes/cards/CardShow';
import { CardEdit } from '../routes/cards/CardEdit';

import { PendingCardsList } from '../routes/pendingcards/PendingCardsList';
import { PendingCardShow } from '../routes/pendingcards/PendingCardShow';
import { PendingCardUpgrade } from '../routes/pendingcards/PendingCardUpgrade';

import { MyAccount } from '../routes/user/MyAccount';
import { ChangePassword } from '../routes/user/ChangePassword';
import { Settings } from '../routes/user/Settings';

import classNames from 'classnames';

const { Content } = Layout;

export const LoggedLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <LoggedMenu collapsed={collapsed} setCollapsed={setCollapsed} />

      <Content
        className={classNames('tw-pt-16', {
          'ant-layout-content-collapsed': collapsed,
        })}
      >
        <LoggedHeader collapsed={collapsed} />

        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route
            path='/cards/create'
            element={<CardCreate collapsed={collapsed} />}
          />
          <Route path='/cards/:cardId/show' element={<CardShow />} />
          <Route
            path='/cards/:cardId/edit'
            element={<CardEdit collapsed={collapsed} />}
          />

          <Route path='/pendingCards' element={<PendingCardsList />} />
          <Route
            path='/pendingCards/:pendingCardId/show'
            element={<PendingCardShow />}
          />
          <Route
            path='/pendingCards/:pendingCardId/upgrade'
            element={<PendingCardUpgrade collapsed={collapsed} />}
          />

          <Route
            path='/myAccount'
            element={<MyAccount collapsed={collapsed} />}
          />
          <Route
            path='/changePassword'
            element={<ChangePassword collapsed={collapsed} />}
          />
          <Route
            path='/settings'
            element={<Settings collapsed={collapsed} />}
          />

          <Route exact path='/' element={<Navigate to={'/login'} replace />} />
          <Route exact path='*' element={<Navigate to={'/404'} replace />} />
        </Routes>
      </Content>
    </Layout>
  );
};
