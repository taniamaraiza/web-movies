import React from 'react';
import { Container } from './styles';
import packageJson from '../../../package.json';

interface FooterProps {
  page: string;
  isError?: boolean;
}

const Footer: React.FC<FooterProps> = ({ page, isError }) => (
  <Container page={page} isError={isError}>
    <p>MoviesWeb 2024</p>
    <p>Version {packageJson.version}</p>
  </Container>
);

export default Footer;
