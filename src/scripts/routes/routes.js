import About from '../views/pages/about';
import Foodthings from '../views/pages/foodthings';
import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Bookmark from '../views/pages/bookmark';
import Explore from '../views/pages/explore';


const routes = {
  '/': Home,
  '/home': Home,
  '/about': About,
  '/foodthings': Foodthings,
  '/detail/:id': Detail,
  '/bookmark': Bookmark,
  '/explore': Explore,
};

export default routes;
