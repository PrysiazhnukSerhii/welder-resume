import { useEffect } from 'react';
import { Header, ListItem, Box } from './portfolio.styled';
import { metod111, metod135, metod136 } from '../../img/index';
import { ImageGalleryItem } from './imageGallery/imageGalleryItem';

// проблема з ul яким обгортую список картинок, якогось хуя він не на всю величину

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export function Portfolio() {
  const galleryID = 'weld-gallery';

  // function isPhonePortrait() {
  //   return window.matchMedia('(max-width: 600px) and (orientation: portrait)')
  //     .matches;
  // }
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',
      paddingFn: viewportSize => {
        return {
          top: 5,
          bottom: 5,
        };
      },
      // initialZoomLevel: zoomLevelObject => {
      //   if (isPhonePortrait()) {
      //     return zoomLevelObject.vFill;
      //   } else {
      //     return zoomLevelObject.fit;
      //   }
      // },
      // secondaryZoomLevel: zoomLevelObject => {
      //   if (!isPhonePortrait()) {
      //     return zoomLevelObject.fit;
      //   } else {
      //     return 1;
      //   }
      // },

      // maxZoomLevel: 1,

      pswpModule: () => import('photoswipe'),
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

    console.log(lightbox.init);

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
