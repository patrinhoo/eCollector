import React, { useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Spin, Row, Col, Card, Button, message, Modal } from 'antd';

import { useSingleCard } from '../../api/useSingleCard';
import { cardsService } from '../../api/cardsService';
import { getCardStatusName } from '../../utils/getCardStatusName';
import { getMaterialTypeName } from '../../utils/getMaterialTypeName';
import { getCardShapeName } from '../../utils/getCardShapeName';
import { getSurfaceTypeName } from '../../utils/getSurfaceTypeName';
import { getPrintTypeName } from '../../utils/getPrintTypeName';
import { getGsmOperatorName } from '../../utils/getGsmOperatorName';
import { getChipTypeName } from '../../utils/getChipTypeName';

const { confirm } = Modal;

export const CardShow = () => {
  const { cardId } = useParams();
  const navigate = useNavigate();

  const { isLoading, data: cardData } = useSingleCard(cardId);

  const deleteHandler = useCallback(() => {
    confirm({
      title: 'Czy na pewno chcesz usunąć kartę?',
      okText: 'Usuń',
      okType: 'danger',
      cancelText: 'Anuluj',
      icon: false,
      width: 450,
      onOk() {
        cardsService
          .delete(cardId)
          .then(() => {
            message.success('Karta została usunięta');
            navigate(-1);
          })
          .catch((err) => {
            console.log(err);
            message.error('Wystąpił błąd!');
          });
      },
    });
  }, [navigate, cardId]);

  return (
    <div className='tw-py-8 tw-px-2 sm:tw-px-4 md:tw-p-8'>
      {isLoading ? (
        <Spin />
      ) : (
        <>
          <div className='tw-text-yellow-medium tw-text-3xl tw-font-semibold tw-text-center'>
            KARTA
          </div>
          <div className='tw-text-right tw-mb-4'>
            <Link to={`/cards/${cardId}/edit`} className='tw-mr-4'>
              <Button>EDYTUJ</Button>
            </Link>
            <Button type='danger' onClick={deleteHandler}>
              USUŃ
            </Button>
          </div>
          <Row gutter={[20, 20]}>
            <Col xs={24} xl={12}>
              <Card>
                <Row gutter={20}>
                  <Col
                    xs={24}
                    className='tw-text-3xl tw-font-semibold tw-text-center tw-text-yellow-medium tw-mb-4'
                  >
                    {cardData.name}
                  </Col>
                  <Col xs={12}>
                    <div className='tw-text-md tw-font-semibold tw-text-center tw-text-black-dark tw-mb-4'>
                      AWERS
                    </div>
                    <img
                      src={cardData.awers}
                      alt='AWERS'
                      className='tw-w-full tw-border-black-dark tw-border-2 tw-rounded-lg tw-p-4'
                    />
                  </Col>
                  <Col xs={12}>
                    <div className='tw-text-md tw-font-semibold tw-text-center tw-text-gray-mediumDark tw-mb-4'>
                      REWERS
                    </div>
                    <img
                      src={cardData.rewers}
                      alt='REWERS'
                      className='tw-w-full tw-border-gray-mediumDark tw-border-2 tw-rounded-lg tw-p-4'
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col xs={24} xl={12}>
              <Row gutter={[20, 20]}>
                <Col xs={24}>
                  <Card>
                    <Row gutter={[5, 15]} className='tw-text-left'>
                      <Col
                        xs={24}
                        className='tw-text-lg tw-font-semibold tw-text-center tw-text-gray-dark'
                      >
                        INFORMACJE PODSTAWOWE
                      </Col>
                      <Col xs={24}>
                        <Row gutter={20}>
                          <Col
                            xs={8}
                            className='tw-text-right tw-text-yellow-medium'
                          >
                            Nazwa karty:
                          </Col>
                          <Col xs={16} className='tw-italic'>
                            {cardData.name}
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24}>
                        <Row gutter={20}>
                          <Col
                            xs={8}
                            className='tw-text-right tw-text-yellow-medium'
                          >
                            Numer katalogowy:
                          </Col>
                          <Col xs={16} className='tw-italic'>
                            {cardData.catalog_number}
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24}>
                        <Row gutter={20}>
                          <Col
                            xs={8}
                            className='tw-text-right tw-text-yellow-medium'
                          >
                            Status:
                          </Col>
                          <Col xs={16} className='tw-italic'>
                            {getCardStatusName(cardData.status)}
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24}>
                        <Row gutter={20}>
                          <Col
                            xs={8}
                            className='tw-text-right tw-text-yellow-medium'
                          >
                            Komentarz:
                          </Col>
                          <Col xs={16} className='tw-italic'>
                            {cardData.comment}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                </Col>

                <Col xs={24}>
                  <Card>
                    <Row className='tw-text-left'>
                      <Col
                        xs={24}
                        className='tw-text-lg tw-font-semibold tw-text-center tw-text-gray-dark tw-mb-4'
                      >
                        INFORMACJE DODATKOWE
                      </Col>
                      <Col xs={24}>
                        <Row gutter={20}>
                          <Col
                            xs={8}
                            className='tw-text-right tw-text-yellow-medium'
                          >
                            Nakład:
                          </Col>
                          <Col xs={16} className='tw-italic'>
                            {cardData.printed_amount}
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24}>
                        <Row gutter={20}>
                          <Col
                            xs={8}
                            className='tw-text-right tw-text-yellow-medium'
                          >
                            Liczba impulsów:
                          </Col>
                          <Col xs={16} className='tw-italic'>
                            {cardData.nr_of_pulses}
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24}>
                        <Row gutter={20}>
                          <Col
                            xs={8}
                            className='tw-text-right tw-text-yellow-medium'
                          >
                            Nominał:
                          </Col>
                          <Col xs={16} className='tw-italic'>
                            {cardData.price}
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24}>
                        <Row gutter={20}>
                          <Col
                            xs={8}
                            className='tw-text-right tw-text-yellow-medium'
                          >
                            Data produkcji:
                          </Col>
                          <Col xs={16} className='tw-italic'>
                            {cardData.production_date}
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24}>
                        <Row gutter={20}>
                          <Col
                            xs={8}
                            className='tw-text-right tw-text-yellow-medium'
                          >
                            Data ważności:
                          </Col>
                          <Col xs={16} className='tw-italic'>
                            {cardData.expiration_date}
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24}>
                        <Row gutter={20}>
                          <Col
                            xs={8}
                            className='tw-text-right tw-text-yellow-medium'
                          >
                            Seria:
                          </Col>
                          <Col xs={16} className='tw-italic'>
                            {cardData.series}
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24}>
                        <Row gutter={20}>
                          <Col
                            xs={8}
                            className='tw-text-right tw-text-yellow-medium'
                          >
                            Prefix:
                          </Col>
                          <Col xs={16} className='tw-italic'>
                            {cardData.prefix}
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24}>
                        <Row gutter={20}>
                          <Col
                            xs={8}
                            className='tw-text-right tw-text-yellow-medium'
                          >
                            Producent:
                          </Col>
                          <Col xs={16} className='tw-italic'>
                            {cardData.producer}
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24}>
                        <Row gutter={20}>
                          <Col
                            xs={8}
                            className='tw-text-right tw-text-yellow-medium'
                          >
                            Rodzaj materiału:
                          </Col>
                          <Col xs={16} className='tw-italic'>
                            {getMaterialTypeName(cardData.material_type)}
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24}>
                        <Row gutter={20}>
                          <Col
                            xs={8}
                            className='tw-text-right tw-text-yellow-medium'
                          >
                            Kształt:
                          </Col>
                          <Col xs={16} className='tw-italic'>
                            {getCardShapeName(cardData.shape)}
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24}>
                        <Row gutter={20}>
                          <Col
                            xs={8}
                            className='tw-text-right tw-text-yellow-medium'
                          >
                            Rodzaj powierzchni:
                          </Col>
                          <Col xs={16} className='tw-italic'>
                            {getSurfaceTypeName(cardData.surface_type)}
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24}>
                        <Row gutter={20}>
                          <Col
                            xs={8}
                            className='tw-text-right tw-text-yellow-medium'
                          >
                            Sposób naniesienia numeru:
                          </Col>
                          <Col xs={16} className='tw-italic'>
                            {getPrintTypeName(cardData.number_printype)}
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24}>
                        <Row gutter={20}>
                          <Col
                            xs={8}
                            className='tw-text-right tw-text-yellow-medium'
                          >
                            Rodzaj numeru:
                          </Col>
                          <Col xs={16} className='tw-italic'>
                            {cardData.number_type}
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24}>
                        <Row gutter={20}>
                          <Col
                            xs={8}
                            className='tw-text-right tw-text-yellow-medium'
                          >
                            Szerokość paska magnetycznego:
                          </Col>
                          <Col xs={16} className='tw-italic'>
                            {cardData.magnetic_stripe_width}
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24}>
                        <Row gutter={20}>
                          <Col
                            xs={8}
                            className='tw-text-right tw-text-yellow-medium'
                          >
                            Sieć komórkowa:
                          </Col>
                          <Col xs={16} className='tw-italic'>
                            {getGsmOperatorName(cardData.gsm_operator)}
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24}>
                        <Row gutter={20}>
                          <Col
                            xs={8}
                            className='tw-text-right tw-text-yellow-medium'
                          >
                            Rodzaj chipa:
                          </Col>
                          <Col xs={16} className='tw-italic'>
                            {getChipTypeName(cardData.chip_type)}
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24}>
                        <Row gutter={20}>
                          <Col
                            xs={8}
                            className='tw-text-right tw-text-yellow-medium'
                          >
                            Wydawca:
                          </Col>
                          <Col xs={16} className='tw-italic'>
                            {cardData.publisher}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};
