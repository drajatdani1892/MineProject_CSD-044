import API_ENDPOINT from '../globals/api-endpoint';

class BlogDbSource {
  static async Blog() {
    const response = await fetch(API_ENDPOINT.BLOG);
    const responseJson = await response.json();
    return responseJson.blogs; // object from API;
  }

  static async detailBlog(id) {
    const response = await fetch(API_ENDPOINT.DETAILBLOG(id));
    return response.json();
  }
}

export default BlogDbSource;
