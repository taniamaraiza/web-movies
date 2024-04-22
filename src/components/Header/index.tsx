import React from 'react';
import {
  Content,
  Title,
} from './styles';

interface HeaderProps {
  page: string;
}

const Header: React.FC<HeaderProps> = ({
  page,
}) => {
  return (
    <Content page={page}>
      <Title>MoviesWeb</Title>
    </Content>
  );
};

export default Header;
