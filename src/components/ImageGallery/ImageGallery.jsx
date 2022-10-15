import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export function ImageGallery({ items, goLargeImg })  {
  return (
        <ul className={css.ImageGallery}>
            <ImageGalleryItem
                items={items}
                goLargeImg={goLargeImg}
              />
        </ul>
    );
  }

ImageGallery.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    ),
    goLargeImg: PropTypes.func.isRequired,
};