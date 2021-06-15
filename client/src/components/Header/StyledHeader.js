import styled from 'styled-components';
import { Typography } from 'antd';

const { Title } = Typography;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const InputSearch = styled.input`
  border: 1px solid #eeeaea;
  box-shadow: 0px 0px 10px rgba(111, 111, 111, 0.25);
  border-radius: 30px 0 0 30px;
  color: #999999;
  font-size: 12px;
  padding: 13px 146px 13px 32px;
  font-family: $fontFam;
  line-height: 21px;
  outline: 0 !important;
  margin: 30px 0 35px 0;
`;

export const Watch = styled(Title)`
  margin: 0 !important;
`;
