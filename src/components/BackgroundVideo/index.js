import React from 'react';

const BackgroundVideo = () => {

  return (
    <video autoPlay muted loop className="backgroundVideo">
      <source src="/video/website-video.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;