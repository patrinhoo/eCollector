import React from 'react';
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

const { Content } = Layout;

export const LoggedLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <LoggedMenu />

      <Content>
        <LoggedHeader />

        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/cards/create' element={<CardCreate />} />
          <Route path='/cards/:cardId/show' element={<CardShow />} />
          <Route path='/cards/:cardId/edit' element={<CardEdit />} />

          <Route path='/pendingCards' element={<PendingCardsList />} />
          <Route
            path='/pendingCards/:pendingCardId/show'
            element={<PendingCardShow />}
          />
          <Route
            path='/pendingCards/:pendingCardId/upgrade'
            element={<PendingCardUpgrade />}
          />

          <Route path='/myAccount' element={<MyAccount />} />
          <Route path='/changePassword' element={<ChangePassword />} />
          <Route path='/settings' element={<Settings />} />

          <Route exact path='/' element={<Navigate to={'/login'} replace />} />
          <Route exact path='*' element={<Navigate to={'/404'} replace />} />
        </Routes>
      </Content>
    </Layout>
  );
};
