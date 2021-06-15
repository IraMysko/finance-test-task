import styled from 'styled-components';
import { Typography } from 'antd';

export const TickersContainer = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  width: ${({ width }) => (width ? '300px' : '400px')};
  height: ${({ height }) => (height ? 'fit-content' : 'auto')};
`;

export const MainTitle = styled(Typography.Title)`
  text-align: center;
`;

export const TickerWrapper = styled.div`
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 10px;
  }
`;

export const TickerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TickerNameBlock = styled.div`
  max-width: 80px;
  background-color: red;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

export const Title = styled.div`
  color: #875f5f;
  font-size: 16px;
  font-weight: 500;
`;

export const SubTitle = styled.div`
  span {
    text-transform: uppercase;
    font-weight: 500;
    color: #6b6b6b;
  }
`;

export const Change = styled(SubTitle)`
  span {
    color: ${({ isChange }) => (isChange ? 'green' : 'red')};
  }
`;

export const AddButton = styled.div`
  margin-bottom: 12px;
`;
