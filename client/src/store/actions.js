import {
  LOAD_TICKERS,
  SAVE_TO_INTERESTING,
  REMOVE_FROM_INTERESTING,
  SEARCH_TICKER,
} from './constants';

export const loadTickersAction = (data) => ({
  type: LOAD_TICKERS,
  payload: data,
});

export const saveTickerToIntrsAction = (ticker) => ({
  type: SAVE_TO_INTERESTING,
  payload: ticker,
});

export const removeTickersAction = (ticker) => ({
  type: REMOVE_FROM_INTERESTING,
  payload: ticker,
});

export const searchTicker = (value) => ({
  type: SEARCH_TICKER,
  payload: value,
});
