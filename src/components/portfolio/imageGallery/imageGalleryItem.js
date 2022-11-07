import { Item } from './imageGalleryItem.styled';

export function ImageGalleryItem({ imageArray }) {
  // взагалі потрібно подивитися як доставати зразу всі картинки ато якось дикувати писати все в ручну а потім переносити
  let peintedPictures = [];

  for (const key in imageArray) {
    peintedPictures.push(
      <Item key={key}>
        <img src={imageArray[key]} alt={key} />
      </Item>
    );
  }

  return peintedPictures;
}
