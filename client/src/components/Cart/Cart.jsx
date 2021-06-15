import React from 'react';
import { useSelector } from 'react-redux';
import { Divider } from 'antd';

import { tickerNameTransform } from '../TickersList/TickersList';
import {
  TickersContainer,
  TickerWrapper,
  TickerNameBlock,
  SubTitle,
  Title,
  MainTitle,
} from '../TickersList/StyledTickersList';

const Cart = () => {
  const { tickers, savedTickers } = useSelector((state) => state.tickers);

  const savedTickersResult = savedTickers.map((savedTicker) => {
    return tickers.find(({ ticker }) => ticker === savedTicker);
  });

  if (!savedTickers.length) {
    return null;
  }

  return (
    <TickersContainer height width>
      <MainTitle level={3}>Your recently asked</MainTitle>

      {savedTickersResult.map(({ ticker, price }) => {
        return (
          <TickerWrapper key={ticker}>
            <Divider />
            <TickerNameBlock>{ticker}</TickerNameBlock>
            <Title>{tickerNameTransform[ticker]}</Title>
            <SubTitle>price: {price} $</SubTitle>
          </TickerWrapper>
        );
      })}
    </TickersContainer>
  );
};

export default Cart;
