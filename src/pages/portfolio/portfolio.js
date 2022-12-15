import { useEffect } from 'react';
import { Header, ListItem, Box } from './portfolio.styled';
import { metod111, metod135, metod136 } from '../../img/index';
import { ImageGalleryItem } from '../../components/imageGallery/imageGalleryItem';

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export function Portfolio() {
  const galleryID = 'weld-gallery';

  useEffect(() => {
    console.log('юз');

    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',
      paddingFn: viewportSize => {
        return {
          top: 5,
          bottom: 5,
        };
      },

      pswpModule: () => import('photoswipe'),
    });

    lightbox.on('beforeOpen', () => {
      console.log('beforeOpen');
      // photoswipe starts to open
    });

    lightbox.on('uiRegister', function () {
      lightbox.pswp.ui.registerElement({
        name: 'custom-caption',
        order: 9,
        isButton: false,
        appendTo: 'root',
        html: 'Caption text',
        onInit: (el, pswp) => {
          lightbox.pswp.on('change', () => {
            const currSlideElement = lightbox.pswp.currSlide.data.element;

            let captionHTML = '';
            if (currSlideElement) {
              const hiddenCaption = currSlideElement.querySelector(
                '.hidden-caption-content'
              );
              if (hiddenCaption) {
                captionHTML = hiddenCaption.innerHTML;
              } else {
                captionHTML = currSlideElement
                  .querySelector('img')
                  .getAttribute('alt');
              }
            }
            el.innerHTML = captionHTML || '';
          });
        },
      });
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className="pswp-gallery" id={galleryID}>
      <Box>
        <Header>111 electrod</Header>
        <ListItem>
          <ImageGalleryItem imageArray={metod111} galleryId={galleryID} />
        </ListItem>
      </Box>

      <Box>
        <Header>135 MAG</Header>
        <ListItem>
          <ImageGalleryItem imageArray={metod135} galleryId={galleryID} />
        </ListItem>
      </Box>

      <Box>
        <Header>136 MAG</Header>
        <ListItem>
          <ImageGalleryItem imageArray={metod136} galleryId={galleryID} />
        </ListItem>
      </Box>
    </div>
  );
}
