import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from 'pages/Home';
import Products from 'pages/Products';

const router = createBrowserRouter([
	{ path: '/', element: <Home /> },
	{ path: '/products', element: <Products /> },
]);

const App = () => <RouterProvider router={router} />;

export default App;
