import React from 'react';
import VideoItem from './VideoItem';
import { FetchedVideoItem } from '../state';

interface VideoListProps {
  videos: FetchedVideoItem[];
  onVideoSelect: (video: FetchedVideoItem) => void;
}

const VideoList: React.FC<VideoListProps> = ({
  videos,
  onVideoSelect,
}: VideoListProps) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="video-list">{renderedList}</div>;
};

export default VideoList;
