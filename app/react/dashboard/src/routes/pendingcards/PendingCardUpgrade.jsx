import React, { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
  Spin,
  Image,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import classNames from 'classnames';

import { pendingCardsService } from '../../api/pendingCardsService';
import { useSinglePendingCard } from '../../api/useSinglePendingCard';
import { getCardTypeName } from '../../utils/getCardTypeName';

const { Option } = Select;

export const PendingCardUpgrade = ({ collapsed }) => {
  const { pendingCardId } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const { isLoading, data: pendingCardData } =
    useSinglePendingCard(pendingCardId);

  const onFinish = useCallback(
    (values) => {
      const tempValues = {
        ...values,
        production_date: values.production_date?.format('YYYY-MM-DD'),
        expiration_date: values.expiration_date?.format('YYYY-MM-DD'),
      };

      pendingCardsService
        .upgrade(pendingCardId, tempValues)
        .then((data) => {
          message.success('Uzupełniono dane karty pomyślnie');
          navigate(`/cards/${data.id}/show`, { replace: true });
        })
        .catch((err) => {
          message.error('Podczas uzupełniania danych karty wystąpił błąd!');
          console.log(err);
        });
    },
    [navigate, pendingCardId]
  );

  const onFinishFailed = useCallback((values) => {
    message.error('Pojawił się błąd w formularzu!');
  }, []);

  const handleCancel = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div className='tw-p-8'>
      <div className='tw-mb-8 tw-text-yellow-medium tw-text-3xl tw-font-semibold tw-text-center'>
        UZUPEŁNIJ DANE KARTY
      </div>

      {isLoading ? (
        <Spin />
      ) : (
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
                    <Row gutter={20}>
                      <Col
                        xs={24}
                        className='tw-text-3xl tw-font-semibold tw-text-center tw-text-yellow-medium tw-mb-4'
                      >
                        {pendingCardData.name}
                      </Col>
                      <Col
                        xs={24}
                        className='tw-text-center tw-text-yellow-medium tw-mb-4'
                      >
                        Typ:
                        <span className='tw-ml-5 tw-text-black-dark tw-italic'>
                          {getCardTypeName(pendingCardData.type)}
                        </span>
                      </Col>
                      <Col xs={12}>
                        <div className='tw-text-md tw-font-semibold tw-text-center tw-text-black-dark tw-mb-4'>
                          AWERS
                        </div>
                        <Image
                          src={pendingCardData.awers}
                          alt='AWERS'
                          className='tw-w-full tw-border-black-dark tw-border-2 tw-rounded-lg tw-cursor-pointer'
                          preview={{
                            mask: false,
                          }}
                        />
                      </Col>
                      <Col xs={12}>
                        <div className='tw-text-md tw-font-semibold tw-text-center tw-text-gray-mediumDark tw-mb-4'>
                          REWERS
                        </div>
                        <Image
                          src={pendingCardData.rewers}
                          alt='REWERS'
                          className='tw-w-full tw-border-gray-mediumDark tw-border-2 tw-rounded-lg tw-cursor-pointer'
                          preview={{
                            mask: false,
                          }}
                        />
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
                      <Select
                        placeholder='Sposób naniesienia numeru'
                        allowClear
                      >
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
      )}
    </div>
  );
};
