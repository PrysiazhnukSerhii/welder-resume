import { Header, ListItem } from './portfolio.styled';
import { metod111 } from '../../img/index';
import { ImageGalleryItem } from './imageGallery/imageGalleryItem';

// проблема з ul яким обгортую список картинок, якогось хуя він не на всю величину

export function Portfolio() {
  return (
    <>
      <div>
        <div>
          <Header>111 electrod</Header>
          <ListItem>
            <ImageGalleryItem imageArray={metod111} />
          </ListItem>
        </div>

        <div>
          <Header>135 MAG</Header>
        </div>

        <div>
          <Header>136 MAG</Header>
        </div>
      </div>
    </>
  );
}
