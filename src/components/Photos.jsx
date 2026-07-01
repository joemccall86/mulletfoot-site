import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/image-gallery.css';

import thu0 from '../assets/Thursday/mullet-foot-0.jpg';
import thu1 from '../assets/Thursday/710827525_122107790349306345_7792628339776780570_n.jpg';
import thu2 from '../assets/Thursday/710827606_122107790391306345_4313331820834147247_n.jpg';
import thu3 from '../assets/Thursday/730713385_122111640753306345_1072349081147228688_n.jpg';

import sun0 from '../assets/Sunday/mullet-foot-1.jpg';
import sun1 from '../assets/Sunday/mullet-foot-2.jpg';
import sun2 from '../assets/Sunday/mullet-foot-3.jpg';
import sun3 from '../assets/Sunday/711567346_122106981429306345_3544311674765070077_n.jpg';
import sun4 from '../assets/Sunday/712466361_122106981381306345_3917773891903646966_n.jpg';
import sun5 from '../assets/Sunday/731760952_122112004599306345_1325318144615753204_n.jpg';

const albums = {
  Thursday: [thu0, thu1, thu2, thu3].map((img) => ({ original: img, thumbnail: img })),
  Sunday: [sun0, sun1, sun2, sun3, sun4, sun5].map((img) => ({ original: img, thumbnail: img })),
};

const Photos = () => {
  const [album, setAlbum] = useState('Thursday');

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter flex items-center gap-3">
        Photos
      </h2>
      <div className="flex gap-3 mb-8">
        {Object.keys(albums).map((name) => (
          <button
            key={name}
            onClick={() => setAlbum(name)}
            className="px-4 py-2 rounded-full text-sm font-bold uppercase tracking-tight transition-colors"
            style={{
              backgroundColor: album === name ? '#39FF14' : 'transparent',
              color: album === name ? '#09090b' : '#888',
              border: '1px solid #27272a',
            }}
          >
            {name}
          </button>
        ))}
      </div>
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
        key={album}
        items={albums[album]}
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
