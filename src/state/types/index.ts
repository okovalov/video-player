export type FetchedVideoItemId = { videoId: string };

export type FetchedVideoThumbnails = {
  medium: { url: string };
};

export type FetchedVideoSnippet = {
  title: string;
  thumbnails: FetchedVideoThumbnails;
};

export type FetchedVideoItem = {
  id: FetchedVideoItemId;
  snippet: FetchedVideoSnippet;
};
