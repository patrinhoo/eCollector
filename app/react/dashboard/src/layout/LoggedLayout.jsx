import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'antd';

import { LoggedMenu } from './logged/LoggedMenu';
import { LoggedHeader } from './logged/LoggedHeader';

import { Dashboard } from '../routes/Dashboard';
import { CardCreate } from '../routes/CardCreate';
import { CardShow } from '../routes/CardShow';
import { CardEdit } from '../routes/CardEdit';

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

          <Route exact path='/' element={<Navigate to={'/login'} replace />} />
          <Route exact path='*' element={<Navigate to={'/404'} replace />} />
        </Routes>
      </Content>
    </Layout>
  );
};
