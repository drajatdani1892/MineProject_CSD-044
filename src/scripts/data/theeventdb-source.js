import API_ENDPOINT from '../globals/api-endpoint';

class TheEventDbSource {
  static async Home() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.events; // object from API;
  }

  static async detailHome(id) {
    const response = await fetch(API_ENDPOINT.DETAILHOME(id));
    console.log(response);
    return response.json();
  }
}

export default TheEventDbSource;