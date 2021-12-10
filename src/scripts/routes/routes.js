import HomePage from '../views/pages/home';
import DetailHome from '../views/pages/detail-home';

const routes = {
  '/': HomePage, // default page
  '/home': HomePage,
  '/detail-home/:id': DetailHome,
};

export default routes;
