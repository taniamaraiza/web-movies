import React from 'react';
import { Container, Content } from './styles';
import { Movie } from '../../api/movies-api/interfaces/movie.interface';

interface CardProps {
  onClickItem: (item: Movie) => void;
  items: Movie[]
}

const Card: React.FC<CardProps> = ({ onClickItem, items }) => (
  <Content gutter={[16, 16]}>
      {items.map((item) => (
        <Container
          hoverable
          style={{ width: '23%', margin: 5}}
          cover={<img alt="example" src={`${process.env['REACT_APP_MOVIES_IMAGE_URL']}${item.poster_path}`} />}
          onClick={() => onClickItem(item)}

          >
          <Container.Meta title={item.title} description={item.overview}/>
        </Container>
      ))}
    </Content>
);

export default Card;
