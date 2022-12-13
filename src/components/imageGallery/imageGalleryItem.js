import { Item, Picture, Link } from './imageGalleryItem.styled';

// import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';

export function ImageGalleryItem({ imageArray, galleryID }) {
  // взагалі потрібно подивитися як доставати зразу всі картинки ато якось дикувати писати все в ручну а потім переносити

  // прокинув першу частину ключ

  let peintedPictures = imageArray.map((image, index) => (
    <Item key={index}>
      <Link
        href={image.url}
        data-pswp-width={image.width}
        data-pswp-height={image.height}
        key={galleryID + '-' + index}
        target="_blank"
        rel="noreferrer"
        alt="uuuuuuuuuuuu"
      >
        <Picture src={image.url} alt={image.name} />
        {/* <h3 className="hidden-caption-content">TTTTTTTTTTTTTTTTTTTTTTTTT</h3> */}
      </Link>
    </Item>
  ));

  return peintedPictures;
}
