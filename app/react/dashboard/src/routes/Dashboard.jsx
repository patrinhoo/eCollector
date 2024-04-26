import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

import { Table, Button } from "antd";

import { useCardsList } from "../api/useCardsList";
import { getCardStatusName } from "../utils/getCardStatusName";
import { CardsFilterModal } from "../common/components/CardsFilterModal";

const columns = [
  {
    title: "Nazwa karty",
    dataIndex: "name",
    key: "name",
    sorter: true,
  },
  {
    title: "Numer katalogowy",
    dataIndex: "catalog_number",
    key: "catalog_number",
    sorter: true,
  },
  {
    title: "Awers",
    dataIndex: "awers",
    key: "awers",
    render: (text, record, index) => (
      <img src={text} alt="awers" style={{ height: 100 }} />
    ),
  },
  {
    title: "Rewers",
    dataIndex: "rewers",
    key: "rewers",
    render: (text, record, index) => (
      <img src={text} alt="rewers" style={{ height: 100 }} />
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text, record, index) => getCardStatusName(text),
    sorter: true,
  },
  {
    title: "Komentarz",
    dataIndex: "comment",
    key: "comment",
  },
  {
    key: "edit",
    width: 50,
    render: (text, record, index) => (
      <Link to={`/cards/${record.id}/edit`}>Edytuj</Link>
    ),
  },
  {
    key: "show",
    width: 50,
    render: (text, record, index) => (
      <Link to={`/cards/${record.id}/show`}>Pokaż</Link>
    ),
  },
];

export const Dashboard = () => {
  const [params, setParams] = useState({});
  const { isLoading, data } = useCardsList(params);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleTableChange = useCallback((pagination, nonUsed, sorter) => {
    setParams((currParams) => {
      const tempParams = {};

      if (currParams.catalog_number) {
        tempParams.catalog_number = currParams.catalog_number;
      }

      if (currParams.name) {
        tempParams.name = currParams.name;
      }

      if (sorter.order) {
        tempParams.ordering =
          sorter.order === "descend" ? "-" + sorter.field : sorter.field;
      }

      return tempParams;
    });
  }, []);

  const handleFilterChange = useCallback((filters) => {
    setIsFiltered(true);
    setParams(filters);
  }, []);

  const removeFiltersHandler = useCallback(() => {
    setIsFiltered(false);
    setParams({});
  }, []);

  const showFilterModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const hideFilterModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return (
    <div className="tw-p-8">
      <div className="tw-mb-8 tw-text-yellow-medium tw-text-3xl tw-font-semibold tw-italic tw-text-center">
        Moje karty
      </div>
      <div className="tw-flex tw-justify-end tw-mb-4 tw-gap-4">
        {isFiltered ? <Button onClick={removeFiltersHandler}>X</Button> : null}
        <Button onClick={showFilterModal}>FILTRUJ</Button>
        <Link to={"/cards/create"}>
          <Button>+ DODAJ</Button>
        </Link>
      </div>
      <CardsFilterModal
        isModalVisible={isModalVisible}
        hideModal={hideFilterModal}
        handleFilterChange={handleFilterChange}
      />

      <Table
        columns={columns}
        dataSource={data}
        pagination={{ defaultPageSize: 1 }}
        scroll={{ x: true }}
        onChange={handleTableChange}
        showSorterTooltip={false}
        loading={isLoading}
        rowKey="id"
      />
    </div>
  );
};
