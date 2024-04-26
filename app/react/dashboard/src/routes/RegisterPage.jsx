import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Form, message } from 'antd';

import { Logo } from '../common/icons/Logo';
import { User } from '../common/icons/User';
import { Enter } from '../common/icons/Enter';

import { registerService } from '../api/registerService';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const registerHandler = useCallback(
    (values) => {
      registerService
        .register({
          email: values.email,
          password: values.password,
          name: values.name,
        })
        .then(() => {
          message.success('Utworzono użytkownika!');
          navigate('/login');
        })
        .catch((err) => {
          console.log(err);
          message.error('Błąd przy tworzeniu użytkownika!');
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

      <Form form={form} name='create' onFinish={registerHandler}>
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
            <div className='tw-mx-auto tw-my-4' style={{ width: 300 }}>
              <Form.Item
                name='name'
                rules={[{ required: true, message: 'Pole wymagane' }]}
              >
                <Input
                  placeholder='Nazwa użytkownika'
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
          to='/login'
          className='tw-font-semibold tw-italic tw-text-gray-mediumDark/50 hover:tw-text-gray-mediumDark/75'
        >
          Log in!
        </Link>
      </div>
    </div>
  );
};
