import UrlParser from '../../routes/url-parser';
import BlogDbSource from '../../data/blogdb-source';
import { createBlogDetailTemplate } from '../templates/template-creator';

const DetailBlog = {
  async render() {
    return `
            <div class="search-and-title">
                <div class="title-page">
                    <h2 id="textDetailBlog" tabindex="0">Detail Blog</h2>
                </div>
            </div>
    <div class="contentblog-container"></div>
    `;
  },

  async afterRender() {
    document.title = 'Mine APP | Detail Blog';
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { blog } = await BlogDbSource.detailBlog(url.id);
    console.log(blog);
    const blogContainer = document.querySelector('.contentblog-container');
    blogContainer.innerHTML = createBlogDetailTemplate(blog);
  },
};

export default DetailBlog;
