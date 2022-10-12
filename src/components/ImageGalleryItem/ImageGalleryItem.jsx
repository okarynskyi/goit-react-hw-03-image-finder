import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export function ImageGalleryItem({ img, largeImg, id, onClick }) {
  return (
    <div className={css.ImageGalleryItem} onClick={onClick}>
      <img className={css.ImageGalleryItem_image} src={img} alt={largeImg} id={id} />
    </div>
  );
}

ImageGalleryItem.propTypes = {
  img: PropTypes.string,
  largeImg: PropTypes.string,
  id: PropTypes.number,
};