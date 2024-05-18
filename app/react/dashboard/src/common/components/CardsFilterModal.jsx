import React, { useCallback } from 'react';
import { Modal, Form, Row, Col, Input, Select } from 'antd';

import './CardsFilterModal.css';

const { Option } = Select;

export const CardsFilterModal = ({
  isModalVisible,
  hideModal,
  handleFilterChange,
  isPendingCard = false,
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

      handleFilterChange(tempParams);

      hideModal();
    });
  }, [form, hideModal, handleFilterChange, isPendingCard]);

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
                <Select placeholder='Typ'>
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
          </Row>
        </Form>
      </Modal>
    </>
  );
};
