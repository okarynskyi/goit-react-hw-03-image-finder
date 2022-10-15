import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export function ImageGalleryItem({ img, largeImg, onClick }) {
  return (
    <div className={css.ImageGalleryItem} onClick={onClick}>
      <img className={css.ImageGalleryItem_image} src={img} alt={largeImg} />
    </div>
  );
}

ImageGalleryItem.propTypes = {
  img: PropTypes.string,
  largeImg: PropTypes.string,
  id: PropTypes.number,
};