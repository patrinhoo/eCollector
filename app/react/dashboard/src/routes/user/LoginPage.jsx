import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Form, message } from 'antd';

import { Logo } from '../../common/icons/Logo';
import { User } from '../../common/icons/User';
import { Enter } from '../../common/icons/Enter';

import { authService } from '../../api/authService';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const loginHandler = useCallback(
    (values) => {
      authService
        .login({ email: values.email, password: values.password })
        .then(() => {
          message.success('Zalogowano!');
          navigate('/dashboard');
        })
        .catch((err) => {
          console.log(err);
          message.error('Nie udało się zalogować!');
        });
    },
    [navigate]
  );

  return (
    <div
      className='tw-p-8 tw-min-h-screen tw-text-center'
      style={{
        background:
          'linear-gradient(115.87deg, rgba(119, 119, 119, 0.47) 64.48%, rgba(153, 158, 0, 0.47) 117.95%)',
      }}
    >
      <Logo width={150} height={150} />
      <div className='tw-w-fit tw-mx-auto'>
        <User width={250} height={275} />
      </div>

      <Form form={form} name='create' onFinish={loginHandler}>
        <div
          className='tw-grid'
          style={{ gridTemplateColumns: '1fr 350px 1fr' }}
        >
          <div></div>
          <div>
            <div className='tw-mx-auto tw-my-4' style={{ width: 300 }}>
              <Form.Item
                name='email'
                rules={[{ required: true, message: 'Pole wymagane' }]}
              >
                <Input
                  placeholder='Email'
                  className='tw-h-11 tw-pl-4 tw-border-yellow-medium tw-border-2 tw-font-black-dark tw-text-lg tw-font-semibold'
                />
              </Form.Item>
            </div>
            <div className='tw-mx-auto tw-my-4' style={{ width: 300 }}>
              <Form.Item
                name='password'
                rules={[{ required: true, message: 'Pole wymagane' }]}
              >
                <Input.Password
                  placeholder='Password'
                  className='tw-h-11 tw-pl-4 tw-border-yellow-medium tw-border-2 tw-font-black-dark tw-text-lg tw-font-semibold'
                />
              </Form.Item>
            </div>
          </div>
          <div className='tw-pt-3'>
            <Form.Item className='tw-text-left'>
              <button type='submit'>
                <Enter width={100} height={120} />
              </button>
            </Form.Item>
          </div>
        </div>
      </Form>
      <div>
        <Link
          to='/register'
          className='tw-font-semibold tw-italic tw-text-gray-mediumDark/50 hover:tw-text-gray-mediumDark/75'
        >
          Sign up!
        </Link>
      </div>
      <div className='tw-pt-10 tw-font-semibold tw-italic tw-text-gray-mediumDark/50'>
        <div>You can try using test account:</div>
        <div>testuser@example.com</div>
        <div>testpw123</div>
      </div>
    </div>
  );
};
