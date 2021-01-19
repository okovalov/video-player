import React, { useState } from 'react';
import WithLayout from './hoc/WithLayout';
import VideoPlayer from './VideoPlayer';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import useVideos from '../hooks/useVideos';
import { FetchedVideoItem } from '../state';

import '../styles/MainPage.scss';

const MainPage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<FetchedVideoItem | null>(
    null,
  );
  const [videos, search] = useVideos('');

  const onFormSubmit = (term: string) => {
    console.log('aa term', term);
    search(term);
  };

  const onVideoSelect = (video: FetchedVideoItem) => {
    setSelectedVideo(video);
  };

  return (
    <WithLayout sectionClass={'main-section'} containerClass={'main-container'}>
      <SearchBar onFormSubmit={onFormSubmit} />
      <div className="container level level-container">
        <div className="container1 level-left">
          <VideoPlayer selectedVideo={selectedVideo} />
        </div>
        <div className="container1 level-right">
          <VideoList onVideoSelect={onVideoSelect} videos={videos} />
        </div>
      </div>
    </WithLayout>
  );
};

export default MainPage;
