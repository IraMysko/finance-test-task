import {
  LOAD_TICKERS,
  SAVE_TO_INTERESTING,
  REMOVE_FROM_INTERESTING,
  SEARCH_TICKER,
} from './constants';

const initialState = {
  tickers: [],
  savedTickers: [],
  searchText: '',
};

export const tickersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TICKERS:
      return {
        ...state,
        tickers: action.payload,
      };
    case SAVE_TO_INTERESTING:
      return {
        ...state,
        savedTickers: [...state.savedTickers, action.payload],
      };
    case REMOVE_FROM_INTERESTING:
      return {
        ...state,
        savedTickers: state.savedTickers.filter((ticker) => ticker !== action.payload),
      };
    case SEARCH_TICKER:
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return state;
  }
};
