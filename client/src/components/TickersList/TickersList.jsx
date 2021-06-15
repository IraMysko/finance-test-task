import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  PlusCircleOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { Divider } from 'antd';

import { loadTickers } from '../../store/operations';
import { saveTickerToIntrsAction, removeTickersAction } from '../../store/actions';
import {
  TickersContainer,
  TickerContainer,
  TickerWrapper,
  TickerNameBlock,
  Title,
  SubTitle,
  AddButton,
  Change,
  MainTitle,
} from './StyledTickersList';

export const tickerNameTransform = {
  AAPL: 'Apple',
  GOOGL: 'Google',
  MSFT: 'Microsoft',
  AMZN: 'Amazon',
  FB: 'Facebook',
  TSLA: 'Tesla',
};

const TickersList = () => {
  const { tickers, searchText, savedTickers } = useSelector((state) => state.tickers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTickers());
  }, [dispatch]);

  const makeHandleAddTicker = (ticker) => () => {
    dispatch(saveTickerToIntrsAction(ticker));
  };

  const makeHandleRemoveTicker = (ticker) => () => {
    dispatch(removeTickersAction(ticker));
  };

  const filteredTickers = searchText.length
    ? tickers.filter(
        ({ ticker }) =>
          ticker.toLowerCase().includes(searchText.toLowerCase()) ||
          tickerNameTransform[ticker].toLowerCase().includes(searchText.toLowerCase()),
      )
    : tickers;

  return (
    <TickersContainer>
      <MainTitle level={3}>The most popular tickers</MainTitle>

      {filteredTickers.map(
        ({
          ticker,
          exchange,
          price,
          change,
          change_percent,
          dividend,
          last_trade_time,
        }) => {
          const isTickerSaved = savedTickers.includes(ticker);
          const date = new Date(last_trade_time).toLocaleString('ru');

          const isChange = change > 0;
          const arrow = isChange ? (
            <ArrowUpOutlined style={{ color: 'green' }} />
          ) : (
            <ArrowDownOutlined style={{ color: 'red' }} />
          );

          return (
            <TickerWrapper key={ticker}>
              <Divider />
              <TickerContainer>
                <div>
                  <TickerNameBlock>
                    <div>{ticker}</div>
                  </TickerNameBlock>
                  <Title>{tickerNameTransform[ticker]}</Title>
                  <SubTitle>
                    price: <span>{price}$</span>
                  </SubTitle>
                  <Change isChange={isChange}>
                    change: <span>{isChange ? `+${change}` : change}$</span>
                  </Change>
                  <SubTitle>
                    changes: <span>{date}</span>
                  </SubTitle>
                </div>
                <div>
                  <AddButton>
                    {isTickerSaved ? (
                      <DeleteOutlined
                        title="Remove"
                        style={{ fontSize: '20px', color: 'gray' }}
                        onClick={makeHandleRemoveTicker(ticker)}
                      />
                    ) : (
                      <PlusCircleOutlined
                        title="Save"
                        style={{ fontSize: '20px', color: 'gray' }}
                        onClick={makeHandleAddTicker(ticker)}
                      />
                    )}
                  </AddButton>
                  <SubTitle>
                    <span>{exchange}</span>
                  </SubTitle>
                  <SubTitle>
                    {arrow} <span> {change_percent}%</span>
                  </SubTitle>
                  <SubTitle>
                    dividend: <span>{dividend}%</span>
                  </SubTitle>
                </div>
              </TickerContainer>
            </TickerWrapper>
          );
        },
      )}
    </TickersContainer>
  );
};

export default TickersList;
