import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Card, Row, Col, Input, Button, message } from 'antd';

import { userService } from '../api/userService';

export const ChangePassword = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = useCallback(
    (values) => {
      userService
        .update({ password: values.password })
        .then(() => {
          message.success('Pomyślnie zmieniono hasło');
          navigate(-1);
        })
        .catch((err) => {
          if (err?.response?.data) {
            message.error('Podczas zmiany hasła wystąpił błąd!');
            Object.keys(err.response.data).map((key) =>
              message.error(err.response.data[key])
            );
          } else {
            message.error('Podczas zmiany hasła wystąpił błąd!');
          }
          console.log(err);
        });
    },
    [navigate]
  );

  const onFinishFailed = useCallback((values) => {
    message.error('Pojawił się błąd w formularzu!');
  }, []);

  const handleCancel = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div className='tw-p-8'>
      <div className='tw-mb-8 tw-text-yellow-medium tw-text-3xl tw-font-semibold tw-italic tw-text-center'>
        ZMIANA HASŁA
      </div>
      <Form
        form={form}
        name='create'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ marginBottom: 100 }}
      >
        <Row gutter={[20, 20]}>
          <Col xs={0} md={2} lg={4} xl={6} xxl={8} />
          <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
            <Card>
              <Row gutter={[20, 5]}>
                <Col
                  xs={24}
                  className='tw-text-lg tw-font-semibold tw-text-center tw-text-gray-dark tw-mb-4'
                >
                  NOWE HASŁO
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name='password'
                    rules={[{ required: true, message: 'Pole wymagane' }]}
                  >
                    <Input.Password placeholder='Nowe hasło' />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name='password2'
                    rules={[
                      { required: true, message: 'Pole wymagane' },
                      {
                        validator(rule, value) {
                          return new Promise((resolve, reject) => {
                            if (!value) {
                              resolve();
                            }

                            const password = form.getFieldValue('password');

                            if (value !== password) {
                              reject('Hasła muszą być identyczne!');
                            } else {
                              resolve();
                            }
                          });
                        },
                      },
                    ]}
                  >
                    <Input.Password placeholder='Powtórz hasło' />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col>
            <Row className='form-actions tw-fixed tw-bottom-0 tw-bg-white tw-px-12 tw-py-6'>
              <Col xs={12} className='tw-text-left' style={{ height: 40 }}>
                <Button size='large' onClick={handleCancel}>
                  Anuluj
                </Button>
              </Col>
              <Col xs={12} className='tw-text-right' style={{ height: 40 }}>
                <Form.Item>
                  <Button size='large' htmlType='submit'>
                    Zapisz
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
