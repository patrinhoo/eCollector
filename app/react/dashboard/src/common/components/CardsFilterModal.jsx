import React, { useCallback } from "react";
import { Modal, Form, Row, Col, Input } from "antd";

import "./CardsFilterModal.css";

export const CardsFilterModal = ({
  isModalVisible,
  hideModal,
  handleFilterChange,
}) => {
  const [form] = Form.useForm();

  const filterOkHandler = useCallback(() => {
    form.validateFields().then((values) => {
      const tempParams = {};

      if (values?.catalog_number) {
        tempParams.catalog_number = values.catalog_number;
      }

      if (values?.name) {
        tempParams.name = values.name;
      }

      handleFilterChange(tempParams);

      hideModal();
    });
  }, [form, hideModal, handleFilterChange]);

  return (
    <>
      <Modal
        title="Filtruj karty"
        open={isModalVisible}
        onCancel={hideModal}
        onOk={filterOkHandler}
      >
        <Form form={form} name="filter" className="tw-pt-4">
          <Row gutter={[20, 5]}>
            <Col xs={24}>
              <Form.Item name="catalog_number">
                <Input placeholder="Numer katalogowy" />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item name="name">
                <Input placeholder="Nazwa karty" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};
