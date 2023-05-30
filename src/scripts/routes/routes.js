import AboutUs from '../views/pages/about-us';
import Foodthings from '../views/pages/foodthings';
import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Bookmark from '../views/pages/bookmark';

const routes = {
  '/': Home,
  '/home': Home,
  '/about-us': AboutUs,
  '/foodthings': Foodthings,
  '/detail/:id': Detail,
  '/bookmark': Bookmark,
};

export default routes;
