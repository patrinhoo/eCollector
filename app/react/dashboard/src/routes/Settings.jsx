import React, { useCallback, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Spin,
  Form,
  Card,
  Row,
  Col,
  Input,
  Button,
  message,
  Checkbox,
} from 'antd';

import { GlobalContext } from '../store/Provider';
import { getSettings } from '../store/actions/settings/getSettings';
import { updateSettings } from '../store/actions/settings/updateSettings';

export const Settings = () => {
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
      const { customFields, optionalFields } =
        settingsState?.data?.fields_to_show_on_list;
      const tempData = {};

      if (customFields) {
        tempData.customFields = customFields.map((field, idx) => ({
          field: field,
        }));
      }

      if (optionalFields) {
        tempData.expiration_date = optionalFields.expiration_date;
        tempData.gsm_operator = optionalFields.gsm_operator;
        tempData.magnetic_stripe_width = optionalFields.magnetic_stripe_width;
        tempData.material_type = optionalFields.material_type;
        tempData.nr_of_pulses = optionalFields.nr_of_pulses;
        tempData.number_printype = optionalFields.number_printype;
        tempData.number_type = optionalFields.number_type;
        tempData.prefix = optionalFields.prefix;
        tempData.price = optionalFields.price;
        tempData.printed_amount = optionalFields.printed_amount;
        tempData.producer = optionalFields.producer;
        tempData.production_date = optionalFields.production_date;
        tempData.publisher = optionalFields.publisher;
        tempData.series = optionalFields.series;
        tempData.shape = optionalFields.shape;
        tempData.surface_type = optionalFields.surface_type;
        tempData.chip_type = optionalFields.chip_type;
      }

      form.setFieldsValue(tempData);
    }
  }, [form, settingsState, settingsDispatch]);

  const onFinish = useCallback(
    async (values) => {
      const customFields = values.customFields?.map((field) => field.field);

      const tempData = {
        fields_to_show_on_list: {
          customFields: customFields,

          optionalFields: {
            expiration_date: values.expiration_date,
            gsm_operator: values.gsm_operator,
            magnetic_stripe_width: values.magnetic_stripe_width,
            material_type: values.material_type,
            nr_of_pulses: values.nr_of_pulses,
            number_printype: values.number_printype,
            number_type: values.number_type,
            prefix: values.prefix,
            price: values.price,
            printed_amount: values.printed_amount,
            producer: values.producer,
            production_date: values.production_date,
            publisher: values.publisher,
            series: values.series,
            shape: values.shape,
            surface_type: values.surface_type,
            chip_type: values.chip_type,
          },
        },
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
                <Row gutter={[20, 20]}>
                  <Col xs={24}>
                    <Card>
                      <Row gutter={[20, 8]}>
                        <Col
                          xs={24}
                          className='tw-text-lg tw-font-semibold tw-text-center tw-text-gray-dark tw-mb-4'
                        >
                          STANDARDOWE POLA:
                        </Col>
                        <Col
                          xs={24}
                          className='tw-text-center tw-font-semibold'
                        >
                          Nazwa karty
                        </Col>
                        <Col
                          xs={24}
                          className='tw-text-center tw-font-semibold'
                        >
                          Numer katalogowy
                        </Col>
                        <Col
                          xs={24}
                          className='tw-text-center tw-font-semibold'
                        >
                          Awers
                        </Col>
                        <Col
                          xs={24}
                          className='tw-text-center tw-font-semibold'
                        >
                          Rewers
                        </Col>
                        <Col
                          xs={24}
                          className='tw-text-center tw-font-semibold'
                        >
                          Status
                        </Col>
                        <Col
                          xs={24}
                          className='tw-text-center tw-font-semibold'
                        >
                          Komentarz
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col xs={24}>
                    <Card>
                      <Row gutter={[20, 8]}>
                        <Col
                          xs={24}
                          className='tw-text-lg tw-font-semibold tw-text-center tw-text-gray-dark tw-mb-4'
                        >
                          OPCJONALNE POLA:
                        </Col>
                        <Col xs={24} md={12} className='tw-text-center'>
                          <Form.Item
                            name='printed_amount'
                            valuePropName='checked'
                          >
                            <Checkbox>Nakład</Checkbox>
                          </Form.Item>
                        </Col>
                        <Col xs={24} md={12} className='tw-text-center'>
                          <Form.Item
                            name='nr_of_pulses'
                            valuePropName='checked'
                          >
                            <Checkbox>Liczba impulsów</Checkbox>
                          </Form.Item>
                        </Col>
                        <Col xs={24} md={12} className='tw-text-center'>
                          <Form.Item name='price' valuePropName='checked'>
                            <Checkbox>Nominał</Checkbox>
                          </Form.Item>
                        </Col>
                        <Col xs={24} md={12} className='tw-text-center'>
                          <Form.Item
                            name='production_date'
                            valuePropName='checked'
                          >
                            <Checkbox>Data produkcji</Checkbox>
                          </Form.Item>
                        </Col>
                        <Col xs={24} md={12} className='tw-text-center'>
                          <Form.Item
                            name='expiration_date'
                            valuePropName='checked'
                          >
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
                          <Form.Item
                            name='material_type'
                            valuePropName='checked'
                          >
                            <Checkbox>Rodzaj materiału</Checkbox>
                          </Form.Item>
                        </Col>
                        <Col xs={24} md={12} className='tw-text-center'>
                          <Form.Item name='shape' valuePropName='checked'>
                            <Checkbox>Kształt</Checkbox>
                          </Form.Item>
                        </Col>
                        <Col xs={24} md={12} className='tw-text-center'>
                          <Form.Item
                            name='surface_type'
                            valuePropName='checked'
                          >
                            <Checkbox>Rodzaj powierzchni</Checkbox>
                          </Form.Item>
                        </Col>
                        <Col xs={24} md={12} className='tw-text-center'>
                          <Form.Item
                            name='number_printype'
                            valuePropName='checked'
                          >
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
                          <Form.Item
                            name='gsm_operator'
                            valuePropName='checked'
                          >
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
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} xl={12}>
                <Row gutter={[20, 20]}>
                  <Col xs={24}>
                    <Card>
                      <Row gutter={[20, 5]}>
                        <Col
                          xs={24}
                          className='tw-text-lg tw-font-semibold tw-text-center tw-text-gray-dark tw-mb-4'
                        >
                          DODATKOWE POLA:
                        </Col>
                        <Col xs={24}>
                          <Form.List name={'customFields'}>
                            {(customFields, { add, remove }) => {
                              return (
                                <div>
                                  {customFields.map((field, idx) => (
                                    <div className='tw-flex tw-gap-4' key={idx}>
                                      <Form.Item
                                        name={[idx, 'field']}
                                        rules={[
                                          {
                                            required: true,
                                            message: 'Pole wymagane',
                                          },
                                        ]}
                                        className='tw-flex-1'
                                      >
                                        <Input placeholder='Pole' />
                                      </Form.Item>
                                      <Button
                                        type='danger'
                                        style={{ width: 40 }}
                                        onClick={() => remove(field.name)}
                                      >
                                        -
                                      </Button>
                                    </div>
                                  ))}

                                  <Col xs={24} className='tw-text-center'>
                                    <Form.Item>
                                      <Button
                                        type='primary'
                                        onClick={() => add()}
                                      >
                                        +
                                      </Button>
                                    </Form.Item>
                                  </Col>
                                </div>
                              );
                            }}
                          </Form.List>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
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
