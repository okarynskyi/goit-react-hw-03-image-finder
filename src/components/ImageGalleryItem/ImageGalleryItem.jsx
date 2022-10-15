import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export function ImageGalleryItem({ items, goLargeImg }) {
    return (items.map(({ webformatURL, largeImageURL, id }) => (
        <li key={id} className={css.ImageGalleryItem} onClick={() =>goLargeImg(largeImageURL)}>
            <img className={css.ImageGalleryItem_image} src={webformatURL} alt={webformatURL} />
        </li>
    ))
  );
}

ImageGalleryItem.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    ),
    goLargeImg: PropTypes.func.isRequired,
};