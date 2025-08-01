import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
const routes = [
  { path: '/', element: <Home /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:id', element: <BlogPost /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
