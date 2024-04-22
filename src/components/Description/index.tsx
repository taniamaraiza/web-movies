import React from 'react';
import { Container, Title, SubTitle } from './styles';


interface DescriptionProps {
  title: string;
  subTitle: string;
}

const Description: React.FC<DescriptionProps> = ({ title, subTitle }) => (
  <Container>
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
  </Container>
);

export default Description;