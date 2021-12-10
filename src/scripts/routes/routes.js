import HomePage from '../views/pages/home';
import Blog from '../views/pages/blog';
import DetailBlog from '../views/pages/detail-blog';
import DetailHome from '../views/pages/detail-home';

const routes = {
  '/': HomePage, // default page
  '/home': HomePage,
  '/detail-home/:id': DetailHome,
  '/blog': Blog,
  '/detail-blog/:id': DetailBlog,
};

export default routes;
