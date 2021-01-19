import React from 'react';
import ReactPlayer from 'react-player';
import { FetchedVideoItem } from '../state';

interface VideoPlayerProps {
  selectedVideo: FetchedVideoItem | null;
}
const VideoPlayer: React.FC<VideoPlayerProps> = ({
  selectedVideo,
}: VideoPlayerProps) => {
  console.log('selectedVideo in player!', selectedVideo);

  let videoId = 'ysz5S6PUM-U';
  if (selectedVideo) {
    const { id: fetchedVideoId } = selectedVideo;

    videoId = fetchedVideoId.videoId;
  }
  return (
    <div>
      <article className="panel is-primary">
        <div className="panel-block">
          <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} />
        </div>
        <div className="panel-block">
          <p className="buttons">
            <button className="button">
              <span className="icon is-small">
                <i className="fas fa-bold"></i>
              </span>
            </button>
            <button className="button">
              <span className="icon is-small">
                <i className="fas fa-italic"></i>
              </span>
            </button>
            <button className="button">
              <span className="icon is-small">
                <i className="fas fa-underline"></i>
              </span>
            </button>
          </p>
        </div>
      </article>
    </div>
  );
};

export default VideoPlayer;
