import React, { useCallback } from 'react';
import { Modal, Form, Row, Col, Input, Select, DatePicker } from 'antd';

import './CardsFilterModal.css';

const { Option } = Select;

export const CardsFilterModal = ({
  isModalVisible,
  hideModal,
  handleFilterChange,
  isPendingCard = false,
  settings = {},
}) => {
  const [form] = Form.useForm();

  const filterOkHandler = useCallback(() => {
    form.validateFields().then((values) => {
      const tempParams = {};

      if (values?.type) {
        tempParams.type = values.type;
      }

      if (values?.name) {
        tempParams.name = values.name;
      }

      if (values?.status) {
        tempParams.status = values.status;
      }

      if (values?.catalog_number) {
        tempParams.catalog_number = values.catalog_number;
      }

      if (values?.printed_amount) {
        tempParams.printed_amount = values.printed_amount;
      }

      if (values?.nr_of_pulses) {
        tempParams.nr_of_pulses = values.nr_of_pulses;
      }

      if (values?.price) {
        tempParams.price = values.price;
      }

      if (values?.production_date) {
        tempParams.production_date =
          values.production_date.format('YYYY-MM-DD');
      }

      if (values?.expiration_date) {
        tempParams.expiration_date =
          values.expiration_date.format('YYYY-MM-DD');
      }

      if (values?.series) {
        tempParams.series = values.series;
      }

      if (values?.prefix) {
        tempParams.prefix = values.prefix;
      }

      if (values?.producer) {
        tempParams.producer = values.producer;
      }

      if (values?.material_type) {
        tempParams.material_type = values.material_type;
      }

      if (values?.shape) {
        tempParams.shape = values.shape;
      }

      if (values?.surface_type) {
        tempParams.surface_type = values.surface_type;
      }

      if (values?.number_printype) {
        tempParams.number_printype = values.number_printype;
      }

      if (values?.number_type) {
        tempParams.number_type = values.number_type;
      }

      if (values?.magnetic_stripe_width) {
        tempParams.magnetic_stripe_width = values.magnetic_stripe_width;
      }

      if (values?.gsm_operator) {
        tempParams.gsm_operator = values.gsm_operator;
      }

      if (values?.chip_type) {
        tempParams.chip_type = values.chip_type;
      }

      if (values?.publisher) {
        tempParams.publisher = values.publisher;
      }

      handleFilterChange(tempParams);

      hideModal();
    });
  }, [form, hideModal, handleFilterChange]);

  return (
    <>
      <Modal
        title='Filtruj karty'
        open={isModalVisible}
        onCancel={hideModal}
        onOk={filterOkHandler}
      >
        <Form
          form={form}
          name='filter'
          className='tw-py-4'
          layout='vertical'
          requiredMark={false}
        >
          <Row gutter={[20, 5]}>
            <Col xs={24}>
              <Form.Item name='name' label='Nazwa karty'>
                <Input placeholder='Nazwa karty' />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item name='type' label='Typ'>
                <Select placeholder='Typ' allowClear>
                  <Option value='MAGNETIC'>MAGNETYCZNE</Option>
                  <Option value='CHIP'>CHIPOWE</Option>
                  <Option value='GSM'>GSM</Option>
                  <Option value='ASSOCIATED_WITH_TELEPHONY'>
                    POWIĄZANE Z TELEFONIĄ
                  </Option>
                  <Option value='OTHER_TOP_UPS'>DOŁADOWANIA RÓŻNE</Option>
                  <Option value='POLONIA'>KARTY POLONIJNE</Option>
                  <Option value='OTHER'>INNE</Option>
                </Select>
              </Form.Item>
            </Col>

            {!isPendingCard && (
              <Col xs={24}>
                <Form.Item name='status' label='Status'>
                  <Select placeholder='Status' allowClear>
                    <Option value='HAVE'>MAM</Option>
                    <Option value='MISSING'>BRAK</Option>
                    <Option value='EXCESS'>NADWYŻKA</Option>
                  </Select>
                </Form.Item>
              </Col>
            )}

            {settings.catalog_number && (
              <Col xs={24}>
                <Form.Item name='catalog_number' label='Numer katalogowy'>
                  <Input placeholder='Numer katalogowy' />
                </Form.Item>
              </Col>
            )}

            {settings.printed_amount && (
              <Col xs={24}>
                <Form.Item name='printed_amount' label='Nakład'>
                  <Input placeholder='Nakład' />
                </Form.Item>
              </Col>
            )}

            {settings.nr_of_pulses && (
              <Col xs={24}>
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
            )}

            {settings.price && (
              <Col xs={24}>
                <Form.Item name='price' label='Nominał'>
                  <Input placeholder='Nominał' />
                </Form.Item>
              </Col>
            )}

            {settings.production_date && (
              <Col xs={24}>
                <Form.Item name='production_date' label='Data produkcji'>
                  <DatePicker
                    placeholder='Data produkcji'
                    style={{ width: '100%' }}
                  />
                </Form.Item>
              </Col>
            )}

            {settings.expiration_date && (
              <Col xs={24}>
                <Form.Item name='expiration_date' label='Data ważności'>
                  <DatePicker
                    placeholder='Data ważności'
                    style={{ width: '100%' }}
                  />
                </Form.Item>
              </Col>
            )}

            {settings.series && (
              <Col xs={24}>
                <Form.Item name='series' label='Seria'>
                  <Input placeholder='Seria' />
                </Form.Item>
              </Col>
            )}

            {settings.prefix && (
              <Col xs={24}>
                <Form.Item name='prefix' label='Prefix'>
                  <Input placeholder='Prefix' />
                </Form.Item>
              </Col>
            )}

            {settings.producer && (
              <Col xs={24}>
                <Form.Item name='producer' label='Producent'>
                  <Input placeholder='Producent' />
                </Form.Item>
              </Col>
            )}

            {settings.material_type && (
              <Col xs={24}>
                <Form.Item name='material_type' label='Rodzaj materiału'>
                  <Select placeholder='Rodzaj materiału' allowClear>
                    <Option value='CARTOON'>KARTON</Option>
                    <Option value='PLASTIC'>PLASTIK</Option>
                    <Option value='OTHER'>INNY</Option>
                  </Select>
                </Form.Item>
              </Col>
            )}

            {settings.shape && (
              <Col xs={24}>
                <Form.Item name='shape' label='Kształt'>
                  <Select placeholder='Kształt' allowClear>
                    <Option value='RECTANGLE'>PROSTOKĄT</Option>
                    <Option value='CIRCLE'>KOŁO</Option>
                    <Option value='HEART'>SERCE</Option>
                    <Option value='OTHER'>INNY</Option>
                  </Select>
                </Form.Item>
              </Col>
            )}

            {settings.surface_type && (
              <Col xs={24}>
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
            )}

            {settings.number_printype && (
              <Col xs={24}>
                <Form.Item
                  name='number_printype'
                  label='Sposób naniesienia numeru'
                >
                  <Select placeholder='Sposób naniesienia numeru' allowClear>
                    <Option value='EMBOSSED_HORIZONTAL'>
                      TŁOCZONY POZIOMY
                    </Option>
                    <Option value='EMBOSSED_VERTICAL'>TŁOCZONY PIONOWY</Option>
                    <Option value='PRINTED_HORIZONTAL'>
                      DRUKOWANY POZIOMY
                    </Option>
                    <Option value='PRINTED_VERTICAL'>DRUKOWANY PIONOWY</Option>
                  </Select>
                </Form.Item>
              </Col>
            )}

            {settings.number_type && (
              <Col xs={24}>
                <Form.Item name='number_type' label='Rodzaj numeru'>
                  <Input placeholder='Rodzaj numeru' />
                </Form.Item>
              </Col>
            )}

            {settings.magnetic_stripe_width && (
              <Col xs={24}>
                <Form.Item
                  name='magnetic_stripe_width'
                  label='Szerokość paska magnetycznego'
                >
                  <Input placeholder='Szerokość paska magnetycznego' />
                </Form.Item>
              </Col>
            )}

            {settings.gsm_operator && (
              <Col xs={24}>
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
            )}

            {settings.chip_type && (
              <Col xs={24}>
                <Form.Item name='chip_type' label='Rodzaj chipa'>
                  <Select placeholder='Rodzaj chipa' allowClear>
                    <Option value='MANUFACTURER'>PRODUCENT</Option>
                    <Option value='PATTERN'>WZÓR</Option>
                    <Option value='IMAGE'>OBRAZ</Option>
                  </Select>
                </Form.Item>
              </Col>
            )}
          </Row>
        </Form>
      </Modal>
    </>
  );
};
