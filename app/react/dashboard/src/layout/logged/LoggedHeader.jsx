import React, { useMemo, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Dropdown, message } from 'antd';

export const LoggedHeader = () => {
  const navigate = useNavigate();

  const logoutHandler = useCallback(() => {
    localStorage.removeItem('token');
    message.success('Wylogowano!');
    navigate('/login');
  }, [navigate]);

  const items = useMemo(
    () => [
      {
        key: '1',
        label: <Link to='/myAccount'>Moje konto</Link>,
      },
      {
        key: '2',
        label: <div onClick={logoutHandler}>Wyloguj</div>,
      },
    ],
    [logoutHandler]
  );

  return (
    <div className='tw-fixed tw-left-0 tw-top-0 tw-w-full tw-flex tw-text-3xl tw-h-16 tw-bg-gray-medium tw-px-8 tw-justify-end tw-z-50'>
      <div className='tw-flex tw-items-center tw-cursor-pointer tw-text-gray-dark hover:tw-text-gray-darker'>
        <Dropdown
          menu={{
            items,
          }}
          trigger={'click'}
        >
          <UserOutlined />
        </Dropdown>
      </div>
    </div>
  );
};
