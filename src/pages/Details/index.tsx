import React from 'react';
import { Col } from 'antd';
import Layout from '../../containers/Layout';
import { Container, Title, ContentDescription } from './styles';
import ImagePreview from '../../components/Image';
import Description from '../../components/Description';
import { useMovies } from '../../context/MoviesContext';

const Details: React.FC = () => {
  const { movieSelected } = useMovies()

  return (
    <Layout page="home">
      <Container>
        <Col span={6}>
          <ImagePreview image={movieSelected.poster_path}/>
        </Col>
        <Col span={14}>
        <ContentDescription>
          <Title>{movieSelected.title}</Title>
          <Description title='Sinopse' subTitle={movieSelected.overview}/>
          <Description title='Language' subTitle={movieSelected.original_language}/>
        </ContentDescription>
        </Col>
      </Container>
    </Layout>
  )
}

export default Details;
