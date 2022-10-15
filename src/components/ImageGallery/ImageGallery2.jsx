import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  state = {
    request: '',
    webformatURL: '',
    largeImageURL: '',
    id: '',
  };

//   isOpen = e => {
//     this.setState({ largeImageURL: e.target.getAttribute('alt') });
//   };

  render() {
    const { items, goLargeImg } = this.props;
    return (
        <ul className={css.ImageGallery}>
          {items.map(({ webformatURL, largeImageURL, id }) => (
            <li key={id}>
              <ImageGalleryItem
                Img={webformatURL}
                largeImg={largeImageURL}
                onClick={() =>goLargeImg(largeImageURL)}
              />
            </li>
          ))}
        </ul>
    );
  }
}

ImageGallery.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            largeImageURL: PropTypes.string.isRequired,
            webformatURL: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    ),
    goLargeImg: PropTypes.func.isRequired,
};