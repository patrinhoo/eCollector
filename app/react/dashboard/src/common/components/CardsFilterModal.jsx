import React, { useCallback } from 'react';
import { Modal, Form, Row, Col, Input } from 'antd';

import './CardsFilterModal.css';

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

      if (!isPendingCard) {
        if (values?.catalog_number) {
          tempParams.catalog_number = values.catalog_number;
        }
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
            {!isPendingCard ? (
              <Col xs={24}>
                <Form.Item name='catalog_number' label='Numer katalogowy'>
                  <Input placeholder='Numer katalogowy' />
                </Form.Item>
              </Col>
            ) : null}
          </Row>
        </Form>
      </Modal>
    </>
  );
};
