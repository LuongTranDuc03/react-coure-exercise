import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { 
  Landing, 
  About, 
  Cocktail, 
  Error, 
  HomeLayout, 
  Newsletter 
} from './pages';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: 'landing',
        element: <Landing />,
      },
      {
        path: 'cocktail',
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
      },
      {
        path: 'about',
        element: <About />,
        children: [
          {
            index: true,
            element: <h2>Our company</h2>
          },
          {
            path: 'person',
            element: <h2>Tran Luong</h2>
          }
        ]
      }
    ]
  },

]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
