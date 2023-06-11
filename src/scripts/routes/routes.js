import About from '../views/pages/about';
import Foodthings from '../views/pages/foodthings';
import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Bookmark from '../views/pages/bookmark';
import Explore from '../views/pages/explore';
import Login from '../views/pages/login';
import Register from '../views/pages/register';
import Eksplorasi from '../views/pages/eksplorasi';

const routes = {
  '/': Home,
  '/home': Home,
  '/about': About,
  '/foodthings': Foodthings,
  '/detail/:id': Detail,
  '/bookmark': Bookmark,
  '/explore': Explore,
  '/login': Login,
  '/register': Register,
  '/eksplorasi/:id': Eksplorasi,
};

export default routes;
