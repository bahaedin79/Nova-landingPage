import { useRoutes } from 'react-router-dom';
import routes from './Routes';
import Navbar from './components/Navbar/Navbar';

function App() {
  const router = useRoutes(routes);
  return (
    <div>
      <Navbar />
      {router}
    </div>
  );
}

export default App;
