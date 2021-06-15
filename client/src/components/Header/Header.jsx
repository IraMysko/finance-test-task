import { Typography } from 'antd';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { searchTicker } from '../../store/actions';
import { HeaderWrapper, InputSearch, Watch } from './StyledHeader';

const { Title } = Typography;

const Header = () => {
  const dispatch = useDispatch();

  const handleFindTicker = (event) => {
    dispatch(searchTicker(event.target.value));
  };

  const locale = 'en';
  const [today, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const time = today.toLocaleTimeString(locale, {
    hour: 'numeric',
    hour12: true,
    minute: 'numeric',
  });

  return (
    <HeaderWrapper>
      <Title>Finance</Title>
      <InputSearch onChange={handleFindTicker} placeholder="search" />
      <Watch>{time}</Watch>
    </HeaderWrapper>
  );
};

export default Header;
