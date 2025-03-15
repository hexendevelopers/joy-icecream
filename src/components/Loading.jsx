'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import loadingSvg from '@/app/assets/image.svg';
import localFont from 'next/font/local';

const thunder = localFont({
  src: "../app/fonts/Thunder-SemiBoldLC.otf",
  weight: "100 900",
});

const Loading = ({ onComplete, progress = 0 }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const updateLoader = () => {
      if (percent < progress) {
        setPercent(prev => Math.min(prev + 1, progress));
      } else if (progress >= 100) {
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    };

    const interval = setInterval(updateLoader, 30);
    return () => clearInterval(interval);
  }, [percent, progress, onComplete]);

  return (
    <div className="fixed inset-0 z-50">
      <div style={{ 
        backgroundColor: '#cc0000',
        height: '100vh',
        width: '100vw',
        color: 'white',
        fontFamily: thunder.style.fontFamily,
        overflow: 'hidden'
      }}>
        <div className="container" style={{ 
          paddingLeft: '', 
          paddingRight: '-100px',
          marginLeft: "120px",
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between' 
        }}>
          <div className="header" style={{ 
            fontSize: '7rem',
            fontWeight: 'bold', 
            margin: 0,
            letterSpacing: '2px'
          }}>
            LOADING...
          </div>
          <div className="loader-container" style={{ 
            display: 'flex', 
            justifyContent: 'flex-end', 
            alignItems: 'flex-end', 
            marginBottom: '50px',
            marginRight: '50px'
          }}>
            <div className="bucket" style={{ 
              position: 'relative',
              width: '300px',
              height: '340px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Image
                src={loadingSvg}
                alt="Loading bucket"
                width={300}
                height={340}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              />
              <div className={thunder.className} style={{ 
                fontSize: '4.5rem',
                color: '#cc0000', 
                fontWeight: 'bold',
                position: 'relative',
                zIndex: 2,
                letterSpacing: '1px'
              }}>
                {percent}%
              </div>
              <div id="progress" style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                backgroundColor: '#cc0000',
                height: `${100 - percent}%`,
                transition: 'height 0.3s ease',
                borderRadius: '0 0 30px 30px',
                zIndex: 1
              }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;