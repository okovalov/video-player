import React, { useEffect } from 'react';
import VideoItem from './VideoItem';
import { FetchedVideoItem } from '../state';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface VideoListProps {
  onVideoSelect: (video: FetchedVideoItem) => void;
}

const VideoList: React.FC<VideoListProps> = ({
  onVideoSelect,
}: VideoListProps) => {
  const { data, error, loading } = useTypedSelector((state) => state.videos);

  const videosMapper = (video: FetchedVideoItem) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  };

  useEffect(() => {
    if (data.length) {
      const [firstVideo] = data;
      onVideoSelect(firstVideo);
    }
  }, []);

  return (
    <div className="video-list">
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map(videosMapper)}
    </div>
  );
};

export default VideoList;
