import BlogDbSource from '../../data/blogdb-source';
import { createBlogItemTemplate } from '../templates/template-creator';
// import { createEventItemTemplate } from '../templates/template-creator';

const Blog = {
  async render() {
    return `
    <div class "container">
      <div class="search-and-title">
                  <div class="title-page">
                      <h2 id="textBlog" tabindex="0">Blog</h2>
                  </div>
              </div>
      <div class="card-list"></div>
    </div>
    `;
  },

  async afterRender() {
    const blogs = await BlogDbSource.Blog();
    const blogContainer = document.querySelector('.card-list');
    blogs.forEach((blog) => {
      blogContainer.innerHTML += createBlogItemTemplate(blog);
    });
  },
};

export default Blog;
