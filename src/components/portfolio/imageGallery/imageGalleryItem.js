import { Item, Picture } from './imageGalleryItem.styled';

export function ImageGalleryItem({ imageArray, galleryID }) {
  // взагалі потрібно подивитися як доставати зразу всі картинки ато якось дикувати писати все в ручну а потім переносити

  // прокинув першу частину ключ

  let peintedPictures = imageArray.map((image, index) => (
    <Item key={index}>
      <a
        href={image.url}
        data-pswp-width={image.width}
        data-pswp-height={image.height}
        key={galleryID + '-' + index}
        target="_blank"
        rel="noreferrer"
      >
        <Picture src={image.url} alt={image.name} />
      </a>
    </Item>
  ));

  return peintedPictures;
}
