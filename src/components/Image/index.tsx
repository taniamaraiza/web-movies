import React from 'react';
import { Container } from './styles';

interface ImageProps {
  image: string
}

const ImagePreview: React.FC<ImageProps> = ({ image }) => (
  <Container.PreviewGroup
    items={[
      `${process.env['REACT_APP_MOVIES_IMAGE_URL']}${image}`,
      `${process.env['REACT_APP_MOVIES_IMAGE_URL']}${image}`,
      `${process.env['REACT_APP_MOVIES_IMAGE_URL']}${image}`,
    ]}
  >
    <Container
      src={`${process.env['REACT_APP_MOVIES_IMAGE_URL']}${image}`}
    />
  </Container.PreviewGroup>
);

export default ImagePreview;