import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { 
  Landing, 
  About, 
  Cocktail, 
  Error, 
  HomeLayout, 
  Newsletter,
  SinglePageError
} from './pages';

import { loader as landingLoader } from './pages/Landing';
import { loader as singleCocktailLoader } from './pages/Cocktail';
import { action as newsletterAction } from './pages/Newsletter';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5
    }
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
      },
      /* Giải thích kỹ:
      - Khi đặt index: true, route này không cần phải có path – nó sẽ tự động khớp với URL của cha.
      -  Khi có lỗi ở loader hoặc ở render, React Router sẽ hiển thị component lỗi này thay vì vỡ trang.
      - loader là 1 hàm bất đồng bộ (async) – chạy trước khi render component.
        Ở đây, landingLoader sẽ lấy data từ API (hoặc logic nào đó), và data đó sẽ được truy cập qua useLoaderData() trong component.
      - Đây chính là component được render khi truy cập route /landing.
      Trong code, Landing sẽ dùng useLoaderData() để lấy data từ loader.
      */
      {
        path: 'cocktail/:id',
        element: <Cocktail />,        
        loader: singleCocktailLoader(queryClient),
        errorElement: <SinglePageError />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
        action: newsletterAction,
        errorElement: <SinglePageError />,
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
