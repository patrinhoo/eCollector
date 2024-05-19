import React, { useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Spin, Row, Col, Card, Button, message, Modal, Image } from 'antd';

import { useSinglePendingCard } from '../../api/useSinglePendingCard';
import { pendingCardsService } from '../../api/pendingCardsService';
import { getCardTypeName } from '../../utils/getCardTypeName';

const { confirm } = Modal;

export const PendingCardShow = () => {
  const { pendingCardId } = useParams();
  const navigate = useNavigate();

  const { isLoading, data: pendingCardData } =
    useSinglePendingCard(pendingCardId);

  const deleteHandler = useCallback(() => {
    confirm({
      title: 'Czy na pewno chcesz usunąć oczekującą kartę?',
      okText: 'Usuń',
      okType: 'danger',
      cancelText: 'Anuluj',
      icon: false,
      width: 450,
      onOk() {
        pendingCardsService
          .delete(pendingCardId)
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
  }, [navigate, pendingCardId]);

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
            <Link
              to={`/pendingCards/${pendingCardId}/upgrade`}
              className='tw-mr-4'
            >
              <Button>UZUPEŁNIJ</Button>
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
                    {pendingCardData.name}
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
                            {pendingCardData.name}
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24}>
                        <Row gutter={20}>
                          <Col
                            xs={8}
                            className='tw-text-right tw-text-yellow-medium'
                          >
                            Typ:
                          </Col>
                          <Col xs={16} className='tw-italic'>
                            {getCardTypeName(pendingCardData.type)}
                          </Col>
                        </Row>
                      </Col>
                      <Col
                        xs={24}
                        className='tw-text-xs tw-text-center tw-italic tw-mt-8'
                      >
                        Aby dodać oczekującą kartę uzupełnij jej dane
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
