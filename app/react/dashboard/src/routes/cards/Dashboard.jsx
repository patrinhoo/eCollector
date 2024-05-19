import React, { useState, useCallback, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Table, Button, Image } from 'antd';

import { useCardsList } from '../../api/useCardsList';
import { getCardTypeName } from '../../utils/getCardTypeName';
import { getCardStatusName } from '../../utils/getCardStatusName';
import { getMaterialTypeName } from '../../utils/getMaterialTypeName';
import { getCardShapeName } from '../../utils/getCardShapeName';
import { getSurfaceTypeName } from '../../utils/getSurfaceTypeName';
import { getPrintTypeName } from '../../utils/getPrintTypeName';
import { getGsmOperatorName } from '../../utils/getGsmOperatorName';
import { getChipTypeName } from '../../utils/getChipTypeName';
import { CardsFilterModal } from '../../common/components/CardsFilterModal';

import { GlobalContext } from '../../store/Provider';
import { getSettings } from '../../store/actions/settings/getSettings';

const defaultColumns = [
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
      <Image
        className='tw-mx-auto tw-cursor-pointer'
        src={text}
        alt='awers'
        style={{ height: 100 }}
        preview={{
          mask: false,
        }}
      />
    ),
  },
  {
    title: 'Rewers',
    dataIndex: 'rewers',
    key: 'rewers',
    render: (text, record, index) => (
      <Image
        className='tw-mx-auto tw-cursor-pointer'
        src={text}
        alt='rewers'
        style={{ height: 100 }}
        preview={{
          mask: false,
        }}
      />
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text, record, index) => getCardStatusName(text),
    sorter: true,
  },
];

const actionColumns = [
  {
    key: 'edit',
    width: 50,
    render: (text, record, index) => (
      <Link to={`/cards/${record.id}/edit`}>Edytuj</Link>
    ),
  },
  {
    key: 'show',
    width: 50,
    render: (text, record, index) => (
      <Link to={`/cards/${record.id}/show`}>Pokaż</Link>
    ),
  },
];

export const Dashboard = () => {
  const [params, setParams] = useState({});
  const { isLoading, data } = useCardsList(params);

  const { settingsState, settingsDispatch } = useContext(GlobalContext);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  const [columns, setColumns] = useState(defaultColumns.concat(actionColumns));

  useEffect(() => {
    if (!settingsState?.isLoaded || settingsState?.error) {
      getSettings()(settingsDispatch);
    }

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const choosenColumns = [];

    if (settingsState.data.catalog_number) {
      choosenColumns.push({
        title: 'Numer katalogowy',
        dataIndex: 'catalog_number',
        key: 'catalog_number',
        render: (text, record, index) => (text ? text : '-'),
        sorter: true,
      });
    }

    if (settingsState.data.printed_amount) {
      choosenColumns.push({
        title: 'Nakład',
        dataIndex: 'printed_amount',
        key: 'printed_amount',
        render: (text, record, index) => (text ? text : '-'),
        sorter: true,
      });
    }

    if (settingsState.data.nr_of_pulses) {
      choosenColumns.push({
        title: 'Liczba impulsów',
        dataIndex: 'nr_of_pulses',
        key: 'nr_of_pulses',
        render: (text, record, index) => (text ? text : '-'),
        sorter: true,
      });
    }

    if (settingsState.data.price) {
      choosenColumns.push({
        title: 'Nominał',
        dataIndex: 'price',
        key: 'price',
        render: (text, record, index) => (text ? text : '-'),
        sorter: true,
      });
    }

    if (settingsState.data.value) {
      choosenColumns.push({
        title: 'Wartość',
        dataIndex: 'value',
        key: 'value',
        render: (text, record, index) => (text ? text : '-'),
        sorter: true,
      });
    }

    if (settingsState.data.production_date) {
      choosenColumns.push({
        title: 'Data produkcji',
        dataIndex: 'production_date',
        key: 'production_date',
        render: (text, record, index) => (text ? text : '-'),
        sorter: true,
      });
    }

    if (settingsState.data.expiration_date) {
      choosenColumns.push({
        title: 'Data ważności',
        dataIndex: 'expiration_date',
        key: 'expiration_date',
        render: (text, record, index) => (text ? text : '-'),
        sorter: true,
      });
    }

    if (settingsState.data.series) {
      choosenColumns.push({
        title: 'Seria',
        dataIndex: 'series',
        key: 'series',
        render: (text, record, index) => (text ? text : '-'),
        sorter: true,
      });
    }

    if (settingsState.data.prefix) {
      choosenColumns.push({
        title: 'Prefix',
        dataIndex: 'prefix',
        key: 'prefix',
        render: (text, record, index) => (text ? text : '-'),
        sorter: true,
      });
    }

    if (settingsState.data.producer) {
      choosenColumns.push({
        title: 'Producent',
        dataIndex: 'producer',
        key: 'producer',
        render: (text, record, index) => (text ? text : '-'),
        sorter: true,
      });
    }

    if (settingsState.data.material_type) {
      choosenColumns.push({
        title: 'Rodzaj materiału',
        dataIndex: 'material_type',
        key: 'material_type',
        render: (text, record, index) => getMaterialTypeName(text),
        sorter: true,
      });
    }

    if (settingsState.data.shape) {
      choosenColumns.push({
        title: 'Kształt',
        dataIndex: 'shape',
        key: 'shape',
        render: (text, record, index) => getCardShapeName(text),
        sorter: true,
      });
    }

    if (settingsState.data.surface_type) {
      choosenColumns.push({
        title: 'Rodzaj powierzchni',
        dataIndex: 'surface_type',
        key: 'surface_type',
        render: (text, record, index) => getSurfaceTypeName(text),
        sorter: true,
      });
    }

    if (settingsState.data.number_printype) {
      choosenColumns.push({
        title: 'Sposób naniesienia numeru',
        dataIndex: 'number_printype',
        key: 'number_printype',
        render: (text, record, index) => getPrintTypeName(text),
        sorter: true,
      });
    }

    if (settingsState.data.number_type) {
      choosenColumns.push({
        title: 'Rodzaj numeru',
        dataIndex: 'number_type',
        key: 'number_type',
        render: (text, record, index) => (text ? text : '-'),
        sorter: true,
      });
    }

    if (settingsState.data.magnetic_stripe_width) {
      choosenColumns.push({
        title: 'Szerokość paska magnetycznego',
        dataIndex: 'magnetic_stripe_width',
        key: 'magnetic_stripe_width',
        render: (text, record, index) => (text ? text : '-'),
        sorter: true,
      });
    }

    if (settingsState.data.gsm_operator) {
      choosenColumns.push({
        title: 'Sieć komórkowa',
        dataIndex: 'gsm_operator',
        key: 'gsm_operator',
        render: (text, record, index) => getGsmOperatorName(text),
        sorter: true,
      });
    }

    if (settingsState.data.chip_type) {
      choosenColumns.push({
        title: 'Rodzaj chipa',
        dataIndex: 'chip_type',
        key: 'chip_type',
        render: (text, record, index) => getChipTypeName(text),
        sorter: true,
      });
    }

    if (settingsState.data.publisher) {
      choosenColumns.push({
        title: 'Wydawca',
        dataIndex: 'publisher',
        key: 'publisher',
        render: (text, record, index) => (text ? text : '-'),
        sorter: true,
      });
    }

    if (settingsState.data.comment) {
      choosenColumns.push({
        title: 'Komentarz',
        dataIndex: 'comment',
        key: 'comment',
        render: (text, record, index) => (text ? text : '-'),
      });
    }

    setColumns(defaultColumns.concat(choosenColumns, actionColumns));

    // eslint-disable-next-line
  }, [settingsState]);

  const handleTableChange = useCallback((pagination, nonUsed, sorter) => {
    setParams((currParams) => {
      const tempParams = {};

      if (currParams.type) {
        tempParams.type = currParams.type;
      }

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
        Moje karty
      </div>
      <div className='tw-flex tw-justify-end tw-mb-4 tw-gap-4'>
        {isFiltered ? <Button onClick={removeFiltersHandler}>X</Button> : null}
        <Button onClick={showFilterModal}>FILTRUJ</Button>
        <Link to={'/cards/create'}>
          <Button>+ DODAJ</Button>
        </Link>
      </div>
      <CardsFilterModal
        isModalVisible={isModalVisible}
        hideModal={hideFilterModal}
        handleFilterChange={handleFilterChange}
        settings={settingsState.data}
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
