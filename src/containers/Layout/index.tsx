import React from 'react';

import Header from '../../components/Header';

import { Container, Content } from './styles';
import Footer from '../../components/Footer';

interface LayoutProps {
  page: string;
  isError?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ page, children }) => {
  return (
    <Content page={page}>
      <Header
        page={page}
      />
      <Container>{children}</Container>
      <Footer page={page} />
    </Content>
  );
};

export default Layout;
