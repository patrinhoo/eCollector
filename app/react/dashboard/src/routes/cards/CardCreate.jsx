import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Form,
  Card,
  Row,
  Col,
  Input,
  Button,
  message,
  Select,
  DatePicker,
  Upload,
} from 'antd';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';

import classNames from 'classnames';

import { cardsService } from '../../api/cardsService';

const { Option } = Select;

export const CardCreate = ({ collapsed }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [awers, setAwers] = useState([]);
  const [rewers, setRewers] = useState([]);

  const onFinish = useCallback(
    (values) => {
      const formData = new FormData();

      if (awers.length === 0) {
        message.error('Dodaj zdjęcie AWERSu karty!');
        return;
      } else {
        formData.append('awers', awers[0].originFileObj);
      }

      if (rewers.length === 0) {
        message.error('Dodaj zdjęcie REWERSu karty!');
        return;
      } else {
        formData.append('rewers', rewers[0].originFileObj);
      }

      formData.append('type', values.type);
      formData.append('name', values.name);
      formData.append('status', values.status);

      if (values.catalog_number) {
        formData.append('catalog_number', values.catalog_number);
      }
      if (values.chip_type) {
        formData.append('chip_type', values.chip_type);
      }
      if (values.comment) {
        formData.append('comment', values.comment);
      }
      if (values.expiration_date) {
        formData.append(
          'expiration_date',
          values.expiration_date.format('YYYY-MM-DD')
        );
      }
      if (values.gsm_operator) {
        formData.append('gsm_operator', values.gsm_operator);
      }
      if (values.magnetic_stripe_width) {
        formData.append('magnetic_stripe_width', values.magnetic_stripe_width);
      }
      if (values.material_type) {
        formData.append('material_type', values.material_type);
      }
      if (values.nr_of_pulses) {
        formData.append('nr_of_pulses', values.nr_of_pulses);
      }
      if (values.number_printype) {
        formData.append('number_printype', values.number_printype);
      }
      if (values.number_type) {
        formData.append('number_type', values.number_type);
      }
      if (values.prefix) {
        formData.append('prefix', values.prefix);
      }
      if (values.price) {
        formData.append('price', values.price);
      }
      if (values.value) {
        formData.append('value', values.value);
      }
      if (values.printed_amount) {
        formData.append('printed_amount', values.printed_amount);
      }
      if (values.producer) {
        formData.append('producer', values.producer);
      }
      if (values.production_date) {
        formData.append(
          'production_date',
          values.production_date.format('YYYY-MM-DD')
        );
      }
      if (values.publisher) {
        formData.append('publisher', values.publisher);
      }
      if (values.producer) {
        formData.append('producer', values.producer);
      }
      if (values.series) {
        formData.append('series', values.series);
      }
      if (values.shape) {
        formData.append('shape', values.shape);
      }
      if (values.surface_type) {
        formData.append('surface_type', values.surface_type);
      }

      cardsService
        .create(formData)
        .then(() => {
          message.success('Karta utworzona pomyślnie');
          navigate(-1);
        })
        .catch((err) => {
          message.error('Podczas dodawania karty wystąpił błąd!');
          console.log(err);
        });
    },
    [navigate, awers, rewers]
  );

  const onFinishFailed = useCallback((values) => {
    message.error('Pojawił się błąd w formularzu!');
  }, []);

  const handleCancel = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const beforeUpload = useCallback((file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('Dozwolone są tylko pliki graficzne!');
    }

    return !isJpgOrPng;
  }, []);

  const handleAwersChange = useCallback((info) => {
    setAwers(info.fileList);
  }, []);

  const handleRewersChange = useCallback((info) => {
    setRewers(info.fileList);
  }, []);

  return (
    <div className='tw-p-8'>
      <div className='tw-mb-8 tw-text-yellow-medium tw-text-3xl tw-font-semibold tw-text-center'>
        DODAJ KARTĘ
      </div>

      <Form
        form={form}
        name='create'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ marginBottom: 100 }}
        layout='vertical'
        requiredMark={false}
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
                      ZDJĘCIE KARTY
                    </Col>
                    <Col xs={24} xl={12}>
                      <Upload
                        style={{ width: '100%' }}
                        listType='picture-card'
                        fileList={awers}
                        onChange={handleAwersChange}
                        beforeUpload={beforeUpload}
                        showUploadList={{
                          showPreviewIcon: false,
                          showRemoveIcon: true,
                          showDownloadIcon: false,
                        }}
                      >
                        {awers.length === 0 ? (
                          <div className='tw-font-semibold'>
                            <UploadOutlined />
                            <div style={{ marginTop: 8 }}>
                              Dodaj AWERS karty
                            </div>
                          </div>
                        ) : null}
                      </Upload>
                    </Col>
                    <Col xs={24} xl={12}>
                      <Upload
                        listType='picture-card'
                        fileList={rewers}
                        onChange={handleRewersChange}
                        beforeUpload={beforeUpload}
                        showUploadList={{
                          showPreviewIcon: false,
                          showRemoveIcon: true,
                          showDownloadIcon: false,
                        }}
                      >
                        {rewers.length === 0 ? (
                          <div className='tw-font-semibold'>
                            <UploadOutlined />
                            <div style={{ marginTop: 8 }}>
                              Dodaj REWERS karty
                            </div>
                          </div>
                        ) : null}
                      </Upload>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col xs={24}>
                <Card>
                  <Row gutter={[20, 5]}>
                    <Col
                      xs={24}
                      className='tw-text-lg tw-font-semibold tw-text-center tw-text-gray-dark tw-mb-4'
                    >
                      INFORMACJE PODSTAWOWE
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name='name'
                        label='Nazwa karty'
                        rules={[{ required: true, message: 'Pole wymagane' }]}
                      >
                        <Input placeholder='Nazwa karty' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name='type'
                        label='Typ'
                        rules={[{ required: true, message: 'Pole wymagane' }]}
                      >
                        <Select placeholder='Typ'>
                          <Option value='MAGNETIC'>MAGNETYCZNE</Option>
                          <Option value='CHIP'>CHIPOWE</Option>
                          <Option value='GSM'>GSM</Option>
                          <Option value='ASSOCIATED_WITH_TELEPHONY'>
                            POWIĄZANE Z TELEFONIĄ
                          </Option>
                          <Option value='OTHER_TOP_UPS'>
                            DOŁADOWANIA RÓŻNE
                          </Option>
                          <Option value='POLONIA'>KARTY POLONIJNE</Option>
                          <Option value='OTHER'>INNE</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name='status'
                        label='Status'
                        rules={[{ required: true, message: 'Pole wymagane' }]}
                      >
                        <Select placeholder='Status'>
                          <Option value='HAVE'>MAM</Option>
                          <Option value='MISSING'>BRAK</Option>
                          <Option value='EXCESS'>NADWYŻKA</Option>
                        </Select>
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
                  INFORMACJE DODATKOWE
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item name='catalog_number' label='Numer katalogowy'>
                    <Input placeholder='Numer katalogowy' />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item name='printed_amount' label='Nakład'>
                    <Input placeholder='Nakład' />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item name='nr_of_pulses' label='Liczba impulsów'>
                    <Select placeholder='Liczba impulsów' allowClear>
                      <Option value='5'>5</Option>
                      <Option value='10'>10</Option>
                      <Option value='15'>15</Option>
                      <Option value='20'>20</Option>
                      <Option value='25'>25</Option>
                      <Option value='30'>30</Option>
                      <Option value='35'>35</Option>
                      <Option value='50'>50</Option>
                      <Option value='100'>100</Option>
                      <Option value='150'>150</Option>
                      <Option value='200'>200</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item name='price' label='Nominał'>
                    <Input placeholder='Nominał' />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item name='production_date' label='Data produkcji'>
                    <DatePicker
                      placeholder='Data produkcji'
                      style={{ width: '100%' }}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item name='expiration_date' label='Data ważności'>
                    <DatePicker
                      placeholder='Data ważności'
                      style={{ width: '100%' }}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item name='series' label='Seria'>
                    <Input placeholder='Seria' />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item name='prefix' label='Prefix'>
                    <Input placeholder='Prefix' />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item name='producer' label='Producent'>
                    <Input placeholder='Producent' />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item name='material_type' label='Rodzaj materiału'>
                    <Select placeholder='Rodzaj materiału' allowClear>
                      <Option value='CARTOON'>KARTON</Option>
                      <Option value='PLASTIC'>PLASTIK</Option>
                      <Option value='OTHER'>INNY</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item name='shape' label='Kształt'>
                    <Select placeholder='Kształt' allowClear>
                      <Option value='RECTANGLE'>PROSTOKĄT</Option>
                      <Option value='CIRCLE'>KOŁO</Option>
                      <Option value='HEART'>SERCE</Option>
                      <Option value='OTHER'>INNY</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item name='surface_type' label='Rodzaj powierzchni'>
                    <Select placeholder='Rodzaj powierzchni' allowClear>
                      <Option value='MAT'>MATOWA</Option>
                      <Option value='GLOSS'>BŁYSZCZĄCA</Option>
                      <Option value='COATED'>LAKIEROWANA</Option>
                      <Option value='MAT_COATED'>MATOWA/LAKIEROWANA</Option>
                      <Option value='OTHER'>INNY</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name='number_printype'
                    label='Sposób naniesienia numeru'
                  >
                    <Select placeholder='Sposób naniesienia numeru' allowClear>
                      <Option value='EMBOSSED_HORIZONTAL'>
                        TŁOCZONY POZIOMY
                      </Option>
                      <Option value='EMBOSSED_VERTICAL'>
                        TŁOCZONY PIONOWY
                      </Option>
                      <Option value='PRINTED_HORIZONTAL'>
                        DRUKOWANY POZIOMY
                      </Option>
                      <Option value='PRINTED_VERTICAL'>
                        DRUKOWANY PIONOWY
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item name='number_type' label='Rodzaj numeru'>
                    <Input placeholder='Rodzaj numeru' />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name='magnetic_stripe_width'
                    label='Szerokość paska magnetycznego'
                  >
                    <Input placeholder='Szerokość paska magnetycznego' />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item name='gsm_operator' label='Sieć komórkowa'>
                    <Select placeholder='Sieć komórkowa' allowClear>
                      <Option value='ERA'>ERA</Option>
                      <Option value='TAK_TAK'>TAK TAK</Option>
                      <Option value='IDEA'>IDEA</Option>
                      <Option value='POP'>POP</Option>
                      <Option value='ORANGE'>ORANGE</Option>
                      <Option value='PLUS'>PLUS</Option>
                      <Option value='SIMPLUS'>SIMPLUS</Option>
                      <Option value='PLUSH'>PLUSH</Option>
                      <Option value='HEYAH'>HEYAH</Option>
                      <Option value='PLAY'>PLAY</Option>
                      <Option value='REDBULL'>REDBULL</Option>
                      <Option value='OTHER'>INNY</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item name='chip_type' label='Rodzaj chipa'>
                    <Select placeholder='Rodzaj chipa' allowClear>
                      <Option value='MANUFACTURER'>PRODUCENT</Option>
                      <Option value='PATTERN'>WZÓR</Option>
                      <Option value='IMAGE'>OBRAZ</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item name='publisher' label='Wydawca'>
                    <Input placeholder='Wydawca' />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item name='comment' label='Komentarz'>
                    <Input placeholder='Komentarz' />
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
                    icon={<PlusOutlined />}
                  >
                    Dodaj
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
