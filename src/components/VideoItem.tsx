// import './VideoItem.css';
import React from 'react';
import { FetchedVideoItem } from '../state';

interface VideoItemProps {
  video: FetchedVideoItem;
  onVideoSelect: (video: FetchedVideoItem) => void;
}

const VideoItem: React.FC<VideoItemProps> = ({
  video,
  onVideoSelect,
}: VideoItemProps) => {
  return (
    <div className="card video-item " onClick={() => onVideoSelect(video)}>
      <div className="card-image">
        <figure className="image is-3by2">
          <img
            alt={video.snippet.title}
            src={video.snippet.thumbnails.medium.url}
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
