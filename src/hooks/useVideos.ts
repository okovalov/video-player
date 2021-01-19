import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';
import { FetchedVideoItem } from '../state';

type hookReturnType = [FetchedVideoItem[], (term: string) => Promise<void>];

type MyType = (searchTerm: string) => hookReturnType;

const useVideos: MyType = (defaultSearchTerm: string) => {
  const [videos, setVideos] = useState<FetchedVideoItem[]>([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term: string) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
