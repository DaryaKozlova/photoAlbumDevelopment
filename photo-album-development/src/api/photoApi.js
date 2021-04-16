import api from './api';

export const loadPhotos = (payload) => {
  return api.get('/DaryaKozlova/photoAlbumDevelopment/posts', { params: payload });
};
