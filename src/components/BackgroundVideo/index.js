import React from 'react';
import video from '../../assets/video/website-video.mp4'

const BackgroundVideo = () => {

  return (
    <video autoPlay muted loop playsInline className="backgroundVideo">
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;