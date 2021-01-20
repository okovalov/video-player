import axios from 'axios';

// const KEY = 'AIzaSyDKFpm3kck0NqWKgtmMicaRkF9mwYK2BJU'; //mine 1
const KEY = 'AIzaSyDhwxn9kgOrnOPcFYYaNhIHTb5VLhmCmKI'; //mine 2

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 4,
    key: KEY,
  },
});
