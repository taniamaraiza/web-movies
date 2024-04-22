import styled, { css } from 'styled-components';
import Color from '../../styles/color';

interface HeaderProps {
  page: string;
}

export const Content = styled.div<HeaderProps>`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Color.secondary.default};
  border-bottom: 1px solid #efefef;
  margin: 0 auto;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-right: 20px;
    }

    img {
      margin-right: 20px;
      margin-left: 10px;
    }

    ${props =>
      props.page !== 'search' &&
      css`
        &:nth-child(1) {
          margin-left: 20px;
        }
      `}
  }

  @media (max-width: 600px) {
    form {
      margin-left: 10px;
    }
  }
`;


export const Title = styled.p`
  padding-left: 20px;
  color: ${Color.white};
`;

