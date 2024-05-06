import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Spin,
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
import moment from 'moment';

import { useSingleCard } from '../../api/useSingleCard';
import { cardsService } from '../../api/cardsService';

const { Option } = Select;

export const CardEdit = () => {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [awers, setAwers] = useState([]);
  const [rewers, setRewers] = useState([]);

  const { isLoading, data } = useSingleCard(cardId);

  useEffect(() => {
    if (!isLoading) {
      const tempData = {
        catalog_number: data.catalog_number,
        chip_type: data.chip_type,
        comment: data.comment,
        expiration_date: moment(data.expiration_date),
        gsm_operator: data.gsm_operator,
        magnetic_stripe_width: data.magnetic_stripe_width,
        material_type: data.material_type,
        name: data.name,
        nr_of_pulses: data.nr_of_pulses,
        number_printype: data.number_printype,
        number_type: data.number_type,
        prefix: data.prefix,
        price: data.price,
        printed_amount: data.printed_amount,
        producer: data.producer,
        production_date: moment(data.production_date),
        publisher: data.publisher,
        series: data.series,
        shape: data.shape,
        status: data.status,
        surface_type: data.surface_type,
      };

      form.setFieldsValue(tempData);
    }
  }, [isLoading, data, form]);

  const onFinish = useCallback(
    (values) => {
      const formData = new FormData();

      if (awers.length !== 0) {
        formData.append('awers', awers[0].originFileObj);
      }

      if (rewers.length !== 0) {
        formData.append('rewers', rewers[0].originFileObj);
      }

      formData.append('catalog_number', values.catalog_number);
      formData.append('chip_type', values.chip_type);
      formData.append('comment', values.comment);
      formData.append(
        'expiration_date',
        values.expiration_date.format('YYYY-MM-DD')
      );
      formData.append('gsm_operator', values.gsm_operator);
      formData.append('magnetic_stripe_width', values.magnetic_stripe_width);
      formData.append('material_type', values.material_type);
      formData.append('name', values.name);
      formData.append('nr_of_pulses', values.nr_of_pulses);
      formData.append('number_printype', values.number_printype);
      formData.append('number_type', values.number_type);
      formData.append('prefix', values.prefix);
      formData.append('price', values.price);
      formData.append('printed_amount', values.printed_amount);
      formData.append('producer', values.producer);
      formData.append(
        'production_date',
        values.production_date.format('YYYY-MM-DD')
      );
      formData.append('publisher', values.publisher);
      formData.append('producer', values.producer);
      formData.append('series', values.series);
      formData.append('shape', values.shape);
      formData.append('status', values.status);
      formData.append('surface_type', values.surface_type);

      cardsService
        .update(cardId, formData)
        .then(() => {
          message.success('Karta edytowana pomyślnie');
          navigate(-1);
        })
        .catch((err) => {
          message.error('Podczas dodawania karty wystąpił błąd!');
          console.log(err);
        });
    },
    [navigate, awers, rewers, cardId]
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
      {isLoading ? (
        <Spin />
      ) : (
        <>
          <div className='tw-mb-8 tw-text-yellow-medium tw-text-3xl tw-font-semibold tw-italic tw-text-center'>
            EDYTUJESZ KARTĘ: {data?.name}
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
                                <img
                                  src={data.awers}
                                  alt={'AWERS'}
                                  style={{ height: 200 }}
                                />
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
                                <img
                                  src={data.rewers}
                                  alt={'REWERS'}
                                  style={{ height: 200 }}
                                />
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
                            rules={[
                              { required: true, message: 'Pole wymagane' },
                            ]}
                          >
                            <Input placeholder='Nazwa karty' />
                          </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                          <Form.Item
                            name='catalog_number'
                            rules={[
                              { required: true, message: 'Pole wymagane' },
                            ]}
                          >
                            <Input placeholder='Numer katalogowy' />
                          </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                          <Form.Item
                            name='status'
                            rules={[
                              { required: true, message: 'Pole wymagane' },
                            ]}
                          >
                            <Select placeholder='Status'>
                              <Option value='HAVE'>MAM</Option>
                              <Option value='MISSING'>BRAK</Option>
                              <Option value='EXCESS'>NADWYŻKA</Option>
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                          <Form.Item
                            name='comment'
                            rules={[
                              { required: true, message: 'Pole wymagane' },
                            ]}
                          >
                            <Input placeholder='Komentarz' />
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
                      <Form.Item
                        name='printed_amount'
                        rules={[{ required: true, message: 'Pole wymagane' }]}
                      >
                        <Input placeholder='Nakład' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name='nr_of_pulses'
                        rules={[{ required: true, message: 'Pole wymagane' }]}
                      >
                        <Select placeholder='Liczba impulsów'>
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
                      <Form.Item
                        name='price'
                        rules={[{ required: true, message: 'Pole wymagane' }]}
                      >
                        <Input placeholder='Nominał' />
                      </Form.Item>
                    </Col>
                    <Col xs={0} md={12} />
                    <Col xs={24} md={12}>
                      <Form.Item
                        name='production_date'
                        rules={[{ required: true, message: 'Pole wymagane' }]}
                      >
                        <DatePicker
                          placeholder='Data produkcji'
                          style={{ width: '100%' }}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name='expiration_date'
                        rules={[{ required: true, message: 'Pole wymagane' }]}
                      >
                        <DatePicker
                          placeholder='Data ważności'
                          style={{ width: '100%' }}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name='series'
                        rules={[{ required: true, message: 'Pole wymagane' }]}
                      >
                        <Input placeholder='Seria' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name='prefix'
                        rules={[{ required: true, message: 'Pole wymagane' }]}
                      >
                        <Input placeholder='Prefix' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name='producer'
                        rules={[{ required: true, message: 'Pole wymagane' }]}
                      >
                        <Input placeholder='Producent' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name='material_type'
                        rules={[{ required: true, message: 'Pole wymagane' }]}
                      >
                        <Select placeholder='Rodzaj materiału'>
                          <Option value='CARTOON'>KARTON</Option>
                          <Option value='PLASTIC'>PLASTIK</Option>
                          <Option value='OTHER'>INNY</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name='shape'
                        rules={[{ required: true, message: 'Pole wymagane' }]}
                      >
                        <Select placeholder='Kształt'>
                          <Option value='RECTANGLE'>PROSTOKĄT</Option>
                          <Option value='CIRCLE'>KOŁO</Option>
                          <Option value='HEART'>SERCE</Option>
                          <Option value='OTHER'>INNY</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name='surface_type'
                        rules={[{ required: true, message: 'Pole wymagane' }]}
                      >
                        <Select placeholder='Rodzaj powierzchni'>
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
                        rules={[{ required: true, message: 'Pole wymagane' }]}
                      >
                        <Select placeholder='Sposób naniesienia numeru'>
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
                      <Form.Item
                        name='number_type'
                        rules={[{ required: true, message: 'Pole wymagane' }]}
                      >
                        <Input placeholder='Rodzaj numeru' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name='magnetic_stripe_width'
                        rules={[{ required: true, message: 'Pole wymagane' }]}
                      >
                        <Input placeholder='Szerokość paska magnetycznego' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name='gsm_operator'
                        rules={[{ required: true, message: 'Pole wymagane' }]}
                      >
                        <Select placeholder='Sieć komórkowa'>
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
                      <Form.Item
                        name='chip_type'
                        rules={[{ required: true, message: 'Pole wymagane' }]}
                      >
                        <Select placeholder='Rodzaj chipa'>
                          <Option value='MANUFACTURER'>PRODUCENT</Option>
                          <Option value='PATTERN'>WZÓR</Option>
                          <Option value='IMAGE'>OBRAZ</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name='publisher'
                        rules={[{ required: true, message: 'Pole wymagane' }]}
                      >
                        <Input placeholder='Wydawca' />
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
        </>
      )}
    </div>
  );
};
