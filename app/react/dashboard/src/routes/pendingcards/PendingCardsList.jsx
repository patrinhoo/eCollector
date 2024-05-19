import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Table, Button } from 'antd';

import { usePendingCardsList } from '../../api/usePendingCardsList';
import { CardsFilterModal } from '../../common/components/CardsFilterModal';
import { getCardTypeName } from '../../utils/getCardTypeName';

const columns = [
  {
    title: 'Nazwa karty',
    dataIndex: 'name',
    key: 'name',
    sorter: true,
  },
  {
    title: 'Typ',
    dataIndex: 'type',
    key: 'type',
    render: (text, record, index) => getCardTypeName(text),
    sorter: true,
  },
  {
    title: 'Awers',
    dataIndex: 'awers',
    key: 'awers',
    render: (text, record, index) => (
      <img
        className='tw-mx-auto'
        src={text}
        alt='awers'
        style={{ height: 100 }}
      />
    ),
  },
  {
    title: 'Rewers',
    dataIndex: 'rewers',
    key: 'rewers',
    render: (text, record, index) => (
      <img
        className='tw-mx-auto'
        src={text}
        alt='rewers'
        style={{ height: 100 }}
      />
    ),
  },
  {
    key: 'edit',
    width: 50,
    render: (text, record, index) => (
      <Link to={`/pendingCards/${record.id}/upgrade`}>Uzupełnij</Link>
    ),
  },
  {
    key: 'show',
    width: 50,
    render: (text, record, index) => (
      <Link to={`/pendingCards/${record.id}/show`}>Pokaż</Link>
    ),
  },
];

export const PendingCardsList = () => {
  const [params, setParams] = useState({});
  const { isLoading, data } = usePendingCardsList(params);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleTableChange = useCallback((pagination, nonUsed, sorter) => {
    setParams((currParams) => {
      const tempParams = {};

      if (currParams.name) {
        tempParams.name = currParams.name;
      }

      if (sorter.order) {
        tempParams.ordering =
          sorter.order === 'descend' ? '-' + sorter.field : sorter.field;
      }

      return tempParams;
    });
  }, []);

  const handleFilterChange = useCallback((filters) => {
    if (Object.keys(filters).length === 0) {
      setIsFiltered(false);
    } else {
      setIsFiltered(true);
    }

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
    <div className='tw-p-8'>
      <div className='tw-mb-8 tw-text-yellow-medium tw-text-3xl tw-font-semibold tw-italic tw-text-center'>
        Oczekujące karty
      </div>
      <div className='tw-flex tw-justify-end tw-mb-4 tw-gap-4'>
        {isFiltered ? <Button onClick={removeFiltersHandler}>X</Button> : null}
        <Button onClick={showFilterModal}>FILTRUJ</Button>
      </div>
      <CardsFilterModal
        isModalVisible={isModalVisible}
        hideModal={hideFilterModal}
        handleFilterChange={handleFilterChange}
        isPendingCard
      />

      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          defaultPageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: [5, 10, 25, 50],
          locale: { items_per_page: '' },
        }}
        scroll={{ x: true }}
        onChange={handleTableChange}
        showSorterTooltip={false}
        loading={isLoading}
        rowKey='id'
      />
    </div>
  );
};
