import styled from 'styled-components';
import { Col } from 'antd';

export const Content = styled.div`
  display: grid;
  justify-content: center;
  height: 100vh;
  align-content: center;
  position: relative;
  bottom: 50px;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const Column = styled(Col)`
  padding: 20px;
`;

export const Divider = styled.div`
  padding-top: 20px;
`;
