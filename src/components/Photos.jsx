import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/image-gallery.css';
import img0 from '../assets/mullet-foot-0.jpg';
import img1 from '../assets/mullet-foot-1.jpg';
import img2 from '../assets/mullet-foot-2.jpg';
import img3 from '../assets/mullet-foot-3.jpg';

const images = [
  { original: img0, thumbnail: img0 },
  { original: img1, thumbnail: img1 },
  { original: img2, thumbnail: img2 },
  { original: img3, thumbnail: img3 },
];

const Photos = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-black mb-12 uppercase tracking-tighter flex items-center gap-3">
        Photos
      </h2>
      <style>{`
        .image-gallery {
          --ig-primary-color: #39FF14;
          --ig-secondary-color: #39FF14;
          --ig-text-color: #e5e7eb;
          --ig-background-color: transparent;
          --ig-border-color: #27272a;
          --ig-bullet-color: #52525b;
          --ig-bullet-active-color: #39FF14;
        }
        .image-gallery-content {
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid #27272a;
        }
        .image-gallery-slide img {
          max-height: 70vh;
          object-fit: contain;
          background: #09090b;
        }
        .image-gallery-bullets .image-gallery-bullet {
          box-shadow: none !important;
        }
        .image-gallery-icon {
          color: #fff;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
        }
        .image-gallery-icon:hover {
          color: #39FF14;
        }
        .image-gallery-icon:focus {
          outline: none;
        }
        .image-gallery-fullscreen-button,
        .image-gallery-play-button {
          bottom: 16px;
        }
        .image-gallery-left-nav,
        .image-gallery-right-nav {
          padding: 0 8px;
        }
      `}</style>
      <ImageGallery
        items={images}
        showThumbnails={false}
        showPlayButton={false}
        showFullscreenButton={true}
        showBullets={true}
        showNav={true}
        infinite={true}
        lazyLoad={true}
        slideDuration={400}
      />
    </section>
  );
};

export default Photos;
