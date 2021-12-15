import HomePage from '../views/pages/home';
import Blog from '../views/pages/blog';
import DetailBlog from '../views/pages/detail-blog';
import DetailHome from '../views/pages/detail-home';
import Bookmark from '../views/pages/bookmark';
import AboutUs from '../views/pages/about-us';

const routes = {
  '/': HomePage, // default page
  '/home': HomePage,
  '/detail-home/:id': DetailHome,
  '/blog': Blog,
  '/detail-blog/:id': DetailBlog,
  '/bookmark': Bookmark,
  '/about-us': AboutUs,
  '/home/:artist': HomePage,
};

export default routes;
