import React from 'react';
import Video from '../../assets/video/website-video.mp4'

const BackgroundVideo = () => {

  return (
    <video autoPlay muted loop className="backgroundVideo">
      <source src={Video} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;