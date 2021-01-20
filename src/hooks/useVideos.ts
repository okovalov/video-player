import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';
import { FetchedVideoItem } from '../state';

type hookReturnType = [FetchedVideoItem[], (term: string) => Promise<void>];

type VideosHookType = (searchTerm: string) => hookReturnType;

const useVideos: VideosHookType = (defaultSearchTerm: string) => {
  const [videos, setVideos] = useState<FetchedVideoItem[]>([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term: string) => {
    try {
      const response = await youtube.get('/search', {
        params: {
          q: term,
        },
      });

      setVideos(response.data.items);
    } catch (err) {
      console.log('err!', err);
    }
  };

  return [videos, search];
};

export default useVideos;
