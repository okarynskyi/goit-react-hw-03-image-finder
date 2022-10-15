import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export function ImageGalleryItem({ items, goLargeImg }) {
    return (items.map(({ webformatURL, largeImageURL, id }) => (
        <li key={id} className={css.ImageGalleryItem} onClick={() =>goLargeImg(largeImageURL)}>
            <img className={css.ImageGalleryItem_image} src={webformatURL} alt={largeImageURL} />
        </li>
    ))
  );
}

ImageGalleryItem.propTypes = {
  img: PropTypes.string,
  largeImg: PropTypes.string,
  id: PropTypes.number,
};