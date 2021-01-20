import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { FetchedVideoItem } from '../state';
import Duration from './Duration';

interface VideoPlayerProps {
  selectedVideo: FetchedVideoItem | null;
}
const VideoPlayer: React.FC<VideoPlayerProps> = ({
  selectedVideo,
}: VideoPlayerProps) => {
  console.log('selectedVideo in player!', selectedVideo);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [played, setPlayed] = useState(0);
  const [url, setUrl] = useState<string | undefined>();

  useEffect(() => {
    if (selectedVideo) {
      const { id: fetchedVideoId } = selectedVideo;

      const { videoId } = fetchedVideoId;

      setUrl(`https://www.youtube.com/watch?v=${videoId}`);
      setIsPlaying(false);
    }
  }, [selectedVideo]);

  // useEffect(() => {
  //   if (url && isPlaying) {
  //     setIsPlaying(false);
  //   }
  // }, [url, isPlaying]);

  if (!selectedVideo) {
    return null;
  }

  const { snippet } = selectedVideo;

  const {
    title: videoTitle,
    channelTitle: videoChannelTitle,
    description: videoDescription,
  } = snippet;

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleDuration = (duration: number) => {
    console.log('du', duration);
    setDuration(duration);
  };

  const handleProgress = (state: { played: number }) => {
    const { played } = state;

    if (isPlaying) {
      setPlayed(played);
    }
  };

  const buttonClassName = isPlaying ? 'fas fa-pause' : 'fas fa-play';

  return (
    <div className="is-full-height">
      <article className="panel is-primary player-panel is-full-height">
        <div className="panel-block is-full-height">
          <ReactPlayer
            width="100%"
            height="100%"
            url={url}
            playing={isPlaying}
            onProgress={handleProgress}
            onDuration={handleDuration}
          />

          <div className="buttons">
            <button className="button" onClick={() => handlePlayPause()}>
              <span className="icon is-small">
                <i className={buttonClassName}></i>
              </span>
            </button>
            <div className="details">
              <div>
                <p>
                  <strong>{videoTitle}</strong>
                </p>
              </div>
              <div className="duration">
                <p>
                  <small>{videoChannelTitle}</small>
                </p>
                <p>
                  <strong>
                    <Duration seconds={duration * played} />
                    {' / '}
                    <Duration seconds={duration} />
                  </strong>
                </p>
              </div>
            </div>
            <div className=" description">
              <p>{videoDescription}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default VideoPlayer;
