import React from 'react';

import TickersList from '../TickersList';
import Cart from '../Cart';
import { FinanceContainer } from './StyledFinance';

const Finance = () => {
  return (
    <>
      <FinanceContainer>
        <TickersList />
        <Cart />
      </FinanceContainer>
    </>
  );
};

export default Finance;
