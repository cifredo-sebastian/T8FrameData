// YouTubePlayer.js
import React from 'react';
import ReactPlayer from 'react-player/youtube';

function YouTubePlayer ({ url }) {
  return (
    <div className='youtube-player-wrapper'>
      <ReactPlayer
        className='react-player'
        url={url}
        width='100%'
        height='100%'
        controls={true}
      />
    </div>
  );
};

export default YouTubePlayer;
