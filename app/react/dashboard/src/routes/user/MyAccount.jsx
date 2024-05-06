import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spin, Form, Card, Row, Col, Input, Button, message } from 'antd';

import { userService } from '../../api/userService';

export const MyAccount = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    userService
      .getUserData()
      .then((data) => {
        form.setFieldsValue(data);

        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        message.error('Wystąpił błąd!');
      });
  }, [setIsLoading, form]);

  const onFinish = useCallback(
    (values) => {
      userService
        .update(values)
        .then(() => {
          message.success('Pomyślnie edytowano użytkownika');
          navigate(-1);
        })
        .catch((err) => {
          if (err?.response?.data) {
            message.error('Podczas edycji użytkownika wystąpił błąd!');
            Object.keys(err.response.data).map((key) =>
              message.error(err.response.data[key])
            );
          } else {
            message.error('Podczas edycji użytkownika wystąpił błąd!');
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

  const handleChangePassword = useCallback(() => {
    navigate('/changePassword');
  }, [navigate]);

  return (
    <div className='tw-p-8'>
      {isLoading ? (
        <Spin />
      ) : (
        <>
          <div className='tw-mb-8 tw-text-yellow-medium tw-text-3xl tw-font-semibold tw-italic tw-text-center'>
            MOJE KONTO
          </div>
          <Form
            form={form}
            name='create'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ marginBottom: 100 }}
          >
            <Row gutter={[20, 20]}>
              <Col xs={24} xl={12}>
                <Row gutter={[20, 20]}>
                  <Col xs={24}>
                    <Card>
                      <Row gutter={[20, 5]}>
                        <Col
                          xs={24}
                          className='tw-text-lg tw-font-semibold tw-text-center tw-text-gray-dark tw-mb-4'
                        >
                          DANE PODSTAWOWE
                        </Col>
                        <Col xs={24}>
                          <Form.Item
                            name='email'
                            rules={[
                              { required: true, message: 'Pole wymagane' },
                            ]}
                          >
                            <Input placeholder='Email' />
                          </Form.Item>
                        </Col>
                        <Col xs={24}>
                          <Form.Item
                            name='name'
                            rules={[
                              { required: true, message: 'Pole wymagane' },
                            ]}
                          >
                            <Input placeholder='Nazwa użytkownika' />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} xl={12}>
                <Card>
                  <Row gutter={[20, 5]}>
                    <Col
                      xs={24}
                      className='tw-text-lg tw-font-semibold tw-text-center tw-text-gray-dark tw-mb-4'
                    >
                      HASŁO
                    </Col>
                    <Col xs={24} className='tw-text-center'>
                      <Button
                        className='tw-px-8'
                        size='large'
                        type='danger'
                        onClick={handleChangePassword}
                      >
                        Zmień hasło
                      </Button>
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
        </>
      )}
    </div>
  );
};
