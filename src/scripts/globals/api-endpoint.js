import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}musicEvent`,
  DETAILHOME: (id) => `${CONFIG.BASE_URL}musicEvent/${id}`,
};

export default API_ENDPOINT;
