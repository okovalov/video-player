import React, { useState } from 'react';
import WithLayout from './hoc/WithLayout';
import VideoPlayer from './VideoPlayer';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import ErrorMessage from './ErrorMessage';
import Loading from './Loading';
import { FetchedVideoItem } from '../state';
import { useTypedSelector } from '../hooks/useTypedSelector';

import '../styles/MainPage.scss';

const MainPage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<FetchedVideoItem | null>(
    null,
  );

  const { error, loading } = useTypedSelector((state) => state.videos);

  const onVideoSelect = (video: FetchedVideoItem | null) => {
    setSelectedVideo(video);
  };

  let content: React.ReactElement = <div></div>;

  if (loading) {
    content = <Loading />;
  }

  if (error) {
    content = <ErrorMessage lastErrorMessage={error} />;
  }

  if (!loading && !error) {
    content = (
      <div className="columns">
        <div className="column column-left">
          <VideoPlayer selectedVideo={selectedVideo} />
        </div>
        <div className="column column-right is-one-quarter">
          <VideoList onVideoSelect={onVideoSelect} />
        </div>
      </div>
    );
  }

  return (
    <WithLayout sectionClass={'main-section'} containerClass={'main-container'}>
      <SearchBar />
      {content}
    </WithLayout>
  );
};

export default MainPage;
