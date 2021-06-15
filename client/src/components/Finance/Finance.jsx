import React from 'react';

import TickersList from '../TickersList';
import SavedTickers from '../SavedTickers';
import { FinanceContainer } from './StyledFinance';

const Finance = () => {
  return (
    <FinanceContainer>
      <TickersList />
      <SavedTickers />
    </FinanceContainer>
  );
};

export default Finance;
