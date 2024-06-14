import React, { useCallback, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spin, Form, Card, Row, Col, Button, message, Checkbox } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

import classNames from 'classnames';

import { GlobalContext } from '../../store/Provider';
import { getSettings } from '../../store/actions/settings/getSettings';
import { updateSettings } from '../../store/actions/settings/updateSettings';

export const Settings = ({ collapsed }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { settingsState, settingsDispatch } = useContext(GlobalContext);

  useEffect(() => {
    if (!settingsState?.isLoaded || settingsState?.error) {
      getSettings()(settingsDispatch);
    }

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (
      settingsState.isLoaded &&
      !settingsState.isLoading &&
      !settingsState.error
    ) {
      const tempData = {
        catalog_number: settingsState.data.catalog_number,
        expiration_date: settingsState.data.expiration_date,
        gsm_operator: settingsState.data.gsm_operator,
        magnetic_stripe_width: settingsState.data.magnetic_stripe_width,
        material_type: settingsState.data.material_type,
        nr_of_pulses: settingsState.data.nr_of_pulses,
        number_printype: settingsState.data.number_printype,
        number_type: settingsState.data.number_type,
        prefix: settingsState.data.prefix,
        price: settingsState.data.price,
        value: settingsState.data.value,
        printed_amount: settingsState.data.printed_amount,
        producer: settingsState.data.producer,
        production_date: settingsState.data.production_date,
        publisher: settingsState.data.publisher,
        series: settingsState.data.series,
        shape: settingsState.data.shape,
        surface_type: settingsState.data.surface_type,
        chip_type: settingsState.data.chip_type,
        comment: settingsState.data.comment,
      };

      form.setFieldsValue(tempData);
    }
  }, [form, settingsState, settingsDispatch]);

  const onFinish = useCallback(
    async (values) => {
      const tempData = {
        catalog_number: Boolean(values.catalog_number),
        expiration_date: Boolean(values.expiration_date),
        gsm_operator: Boolean(values.gsm_operator),
        magnetic_stripe_width: Boolean(values.magnetic_stripe_width),
        material_type: Boolean(values.material_type),
        nr_of_pulses: Boolean(values.nr_of_pulses),
        number_printype: Boolean(values.number_printype),
        number_type: Boolean(values.number_type),
        prefix: Boolean(values.prefix),
        price: Boolean(values.price),
        value: Boolean(values.value),
        printed_amount: Boolean(values.printed_amount),
        producer: Boolean(values.producer),
        production_date: Boolean(values.production_date),
        publisher: Boolean(values.publisher),
        series: Boolean(values.series),
        shape: Boolean(values.shape),
        surface_type: Boolean(values.surface_type),
        chip_type: Boolean(values.chip_type),
        comment: Boolean(values.comment),
      };

      updateSettings(tempData)(settingsDispatch)
        .then(() => {
          message.success('Pomyślnie zapisano ustawienia');
          navigate(-1);
        })
        .catch((err) => {
          message.error('Podczas edycji ustawień wystąpił błąd!');
        });
    },
    [navigate, settingsDispatch]
  );

  const onFinishFailed = useCallback((values) => {
    console.log(values);
    message.error('Pojawił się błąd w formularzu!');
  }, []);

  const handleCancel = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div className='tw-p-8'>
      {settingsState.isLoading ? (
        <Spin />
      ) : (
        <>
          <div className='tw-mb-8 tw-text-yellow-medium tw-text-3xl tw-font-semibold tw-italic tw-text-center'>
            USTAWIENIA
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
                <Card>
                  <Row gutter={[20, 8]}>
                    <Col
                      xs={24}
                      className='tw-text-lg tw-font-semibold tw-text-center tw-text-gray-dark tw-mb-4'
                    >
                      STANDARDOWE POLA:
                    </Col>
                    <Col xs={24} className='tw-text-center tw-font-semibold'>
                      Nazwa karty
                    </Col>
                    <Col xs={24} className='tw-text-center tw-font-semibold'>
                      Typ
                    </Col>
                    <Col xs={24} className='tw-text-center tw-font-semibold'>
                      Awers
                    </Col>
                    <Col xs={24} className='tw-text-center tw-font-semibold'>
                      Rewers
                    </Col>
                    <Col xs={24} className='tw-text-center tw-font-semibold'>
                      Status
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col xs={24} xl={12}>
                <Card>
                  <Row gutter={[20, 8]}>
                    <Col
                      xs={24}
                      className='tw-text-lg tw-font-semibold tw-text-center tw-text-gray-dark tw-mb-4'
                    >
                      OPCJONALNE POLA:
                    </Col>
                    <Col xs={24} md={12} className='tw-text-center'>
                      <Form.Item name='catalog_number' valuePropName='checked'>
                        <Checkbox>Numer katalogowy</Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12} className='tw-text-center'>
                      <Form.Item name='printed_amount' valuePropName='checked'>
                        <Checkbox>Nakład</Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12} className='tw-text-center'>
                      <Form.Item name='nr_of_pulses' valuePropName='checked'>
                        <Checkbox>Liczba impulsów</Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12} className='tw-text-center'>
                      <Form.Item name='price' valuePropName='checked'>
                        <Checkbox>Nominał</Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12} className='tw-text-center'>
                      <Form.Item name='production_date' valuePropName='checked'>
                        <Checkbox>Data produkcji</Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12} className='tw-text-center'>
                      <Form.Item name='expiration_date' valuePropName='checked'>
                        <Checkbox>Data ważności</Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12} className='tw-text-center'>
                      <Form.Item name='series' valuePropName='checked'>
                        <Checkbox>Seria</Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12} className='tw-text-center'>
                      <Form.Item name='prefix' valuePropName='checked'>
                        <Checkbox>Prefix</Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12} className='tw-text-center'>
                      <Form.Item name='producer' valuePropName='checked'>
                        <Checkbox>Producent</Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12} className='tw-text-center'>
                      <Form.Item name='material_type' valuePropName='checked'>
                        <Checkbox>Rodzaj materiału</Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12} className='tw-text-center'>
                      <Form.Item name='shape' valuePropName='checked'>
                        <Checkbox>Kształt</Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12} className='tw-text-center'>
                      <Form.Item name='surface_type' valuePropName='checked'>
                        <Checkbox>Rodzaj powierzchni</Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12} className='tw-text-center'>
                      <Form.Item name='number_printype' valuePropName='checked'>
                        <Checkbox>Sposób naniesienia numeru</Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12} className='tw-text-center'>
                      <Form.Item name='number_type' valuePropName='checked'>
                        <Checkbox>Rodzaj numeru</Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12} className='tw-text-center'>
                      <Form.Item
                        name='magnetic_stripe_width'
                        valuePropName='checked'
                      >
                        <Checkbox>Szerokość paska magnetycznego</Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12} className='tw-text-center'>
                      <Form.Item name='gsm_operator' valuePropName='checked'>
                        <Checkbox>Sieć komórkowa</Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12} className='tw-text-center'>
                      <Form.Item name='chip_type' valuePropName='checked'>
                        <Checkbox>Rodzaj chipa</Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12} className='tw-text-center'>
                      <Form.Item name='publisher' valuePropName='checked'>
                        <Checkbox>Wydawca</Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12} className='tw-text-center'>
                      <Form.Item name='comment' valuePropName='checked'>
                        <Checkbox>Komentarz</Checkbox>
                      </Form.Item>
                    </Col>
                  </Row>
                </Card>
              </Col>

              <Col>
                <Row
                  className={classNames(
                    'form-actions tw-fixed tw-bottom-0 tw-bg-white tw-px-12 tw-py-6',
                    {
                      'form-actions-collapsed': collapsed,
                    }
                  )}
                >
                  <Col xs={12} className='tw-text-left' style={{ height: 40 }}>
                    <Button type='danger' size='large' onClick={handleCancel}>
                      Anuluj
                    </Button>
                  </Col>
                  <Col xs={12} className='tw-text-right' style={{ height: 40 }}>
                    <Form.Item>
                      <Button
                        className='ant-btn-green'
                        type='primary'
                        size='large'
                        htmlType='submit'
                        icon={<SaveOutlined />}
                      >
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
