import { useEffect } from 'react';
import { Header, ListItem } from './portfolio.styled';
import { metod111, metod135 } from '../../img/index';
import { ImageGalleryItem } from './imageGallery/imageGalleryItem';

// проблема з ul яким обгортую список картинок, якогось хуя він не на всю величину

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const shortid = require('shortid');

export function Portfolio() {
  const galleryID = 'weld-gallery';
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className="pswp-gallery" id={galleryID}>
      <div>
        <Header>111 electrod</Header>
        <ListItem>
          <ImageGalleryItem imageArray={metod111} galleryId={galleryID} />
        </ListItem>
      </div>

      <div>
        <Header>135 MAG</Header>
        <ListItem>
          <ImageGalleryItem imageArray={metod135} galleryId={galleryID} />
        </ListItem>
      </div>
    </div>
  );

  // return (
  //   <div className="pswp-gallery" id={galleryID}>
  //     <ul>
  //       <li>
  //         <a
  //           href={metod111.mangat}
  //           data-pswp-width="1669"
  //           data-pswp-height="2500"
  //           key={galleryID + '-' + shortid.generate()}
  //           target="_blank"
  //           rel="noreferrer"
  //         >
  //           <img
  //             src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
  //             alt={shortid.generate()}
  //           />
  //         </a>
  //       </li>
  //     </ul>

  //     <a
  //       href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
  //       data-pswp-width="1669"
  //       data-pswp-height="2500"
  //       target="_blank"
  //       rel="noreferrer"
  //     >
  //       <img
  //         src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
  //         alt={shortid.generate()}
  //       />
  //     </a>
  //     <a
  //       href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-2500.jpg"
  //       data-pswp-width="1875"
  //       data-pswp-height="2500"
  //       data-cropped="true"
  //       target="_blank"
  //     >
  //       <img
  //         src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-200.jpg"
  //         alt=""
  //       />
  //     </a>
  //   </div>
  // );
}

// export function Portfolio() {

// return (
//   <>
//     <div>
//       <div>
//         <Header>111 electrod</Header>
//         <ListItem>
//           <ImageGalleryItem imageArray={metod111} />
//         </ListItem>
//       </div>

//       <div>
//         <Header>135 MAG</Header>
//       </div>

//       <div>
//         <Header>136 MAG</Header>
//       </div>
//     </div>
//   </>
// );
// }
