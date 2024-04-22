import React, { useCallback, useEffect } from 'react';
import Layout from '../../containers/Layout';
import Card from '../../components/Card';
import { Row } from 'antd';
import { Column, Divider, Title } from './styles';
import Search from '../../components/Search';
import { useMovies } from '../../context/MoviesContext';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const { handleSetMovieSelected, movies, handleGetMovies, handleSetChangeSearch } = useMovies()
  const history = useHistory()

  const handleClickItem = useCallback((item) => {
    handleSetMovieSelected(item);

    history.push('/details')
  }, [])

  const handleChangeSearch = useCallback((value) => {
    handleSetChangeSearch(value);

  }, [])

  useEffect(() => {
    handleGetMovies()
  }, [])

  return (
    <Layout page="home">
      <Row>
        <Column span={6}>
          <Title>Filmes</Title>
          <Divider>
            <Search onChangeSearch={handleChangeSearch} />
          </Divider>
        </Column>
        <Column span={18}  style={{ maxHeight: '100vh', overflow: 'scroll'}}>
          <Card items={movies} onClickItem={handleClickItem} />
        </Column>
      </Row>
    </Layout>
  );
};

export default Home;
