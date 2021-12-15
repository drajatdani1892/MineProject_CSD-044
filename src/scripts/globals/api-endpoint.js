import CONFIG from './config';

const API_ENDPOINT = {
  // HOME: `${CONFIG.BASE_URL}events.json?classificationName=music&apikey=${CONFIG.KEY}&size=10`,
  HOME: `${CONFIG.BASE_URL}musicEvent`,
  BLOG: `${CONFIG.BASE_URL}blogcontent`,
  SEARCH: (category, artist) => `${CONFIG.BASE_URL}musicEvent?${category}=${artist}`,
  DETAILBLOG: (id) => `${CONFIG.BASE_URL}blogcontent/${id}`,
  DETAILHOME: (id) => `${CONFIG.BASE_URL}musicEvent/${id}`,
};

export default API_ENDPOINT;
