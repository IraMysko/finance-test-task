import { io } from 'socket.io-client';

import { loadTickersAction } from './actions';

const URL = 'http://localhost:4000';

export const loadTickers = () => {
  return async (dispatch) => {
    const websocket = io(URL);
    websocket.emit('start');
    websocket.on('ticker', (response) => {
      dispatch(loadTickersAction(response));
    });
  };
};
