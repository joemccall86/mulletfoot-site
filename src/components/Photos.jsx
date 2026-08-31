import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/image-gallery.css';

import thu0 from '../assets/Thursday/mullet-foot-0.jpg';
import thu1 from '../assets/Thursday/710827525_122107790349306345_7792628339776780570_n.jpg';
import thu2 from '../assets/Thursday/710827606_122107790391306345_4313331820834147247_n.jpg';
import thu3 from '../assets/Thursday/730713385_122111640753306345_1072349081147228688_n.jpg';
import thu4 from '../assets/Thursday/741365567_122113717959306345_1673925386118201655_n.jpg';
import thu5 from '../assets/Thursday/742391268_122113717917306345_659497183485494809_n.jpg';
import thu6 from '../assets/Thursday/742649246_122113717875306345_2793312855031981609_n.jpg';
import thu7 from '../assets/Thursday/750493426_122114695707306345_9143280942195496775_n.jpg';
import thu8 from '../assets/Thursday/753729696_122115612369306345_4542961437992783863_n.jpg';
import thu9 from '../assets/Thursday/759688367_122116528683306345_7026298900307318259_n.jpg';
import thu10 from '../assets/Thursday/760023926_122116528827306345_8675376294560200540_n.jpg';
import thu11 from '../assets/Thursday/3122.jpg';
import thu12 from '../assets/Thursday/img_1ff54370d429.jpeg';
import thu13 from '../assets/Thursday/img_fb10ff124f1a.jpeg';
import thu14 from '../assets/Thursday/img_65fc9a14a21c.jpeg';

import sun0 from '../assets/Sunday/mullet-foot-1.jpg';
import sun1 from '../assets/Sunday/mullet-foot-2.jpg';
import sun2 from '../assets/Sunday/mullet-foot-3.jpg';
import sun3 from '../assets/Sunday/711567346_122106981429306345_3544311674765070077_n.jpg';
import sun4 from '../assets/Sunday/712466361_122106981381306345_3917773891903646966_n.jpg';
import sun5 from '../assets/Sunday/718390041_122108218047306345_5521608688443963092_n.jpg';
import sun6 from '../assets/Sunday/728293788_122110975875306345_6448473267498374369_n.jpg';
import sun7 from '../assets/Sunday/731760952_122112004599306345_1325318144615753204_n.jpg';
import sun8 from '../assets/Sunday/737502358_122113106583306345_6980279880257916460_n.jpg';
import sun9 from '../assets/Sunday/743414019_122114054475306345_909206048234133388_n.jpg';
import sun10 from '../assets/Sunday/744869996_122114054529306345_5248594134721579268_n.jpg';
import sun11 from '../assets/Sunday/746715774_122114054289306345_1552510030415718713_n.jpg';
import sun12 from '../assets/Sunday/748873876_122114954319306345_1298212331692921541_n.jpg';
import sun13 from '../assets/Sunday/752198959_122115046803306345_5480040920490215235_n.jpg';
import sun14 from '../assets/Sunday/PXL_20260802_103508761.jpg';
import sun15 from '../assets/Sunday/IMG_20260802_060613_781.jpg';
import sun16 from '../assets/Sunday/3151.jpg';

const albums = {
  Thursday: [thu0, thu1, thu2, thu3, thu4, thu5, thu6, thu7, thu8, thu9, thu10, thu11, thu12, thu13, thu14].map((img) => ({ original: img, thumbnail: img })),
  Sunday: [sun0, sun1, sun2, sun3, sun4, sun5, sun6, sun7, sun8, sun9, sun10, sun11, sun12, sun13, sun14, sun15, sun16].map((img) => ({ original: img, thumbnail: img })),
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
