import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ReactDOM from 'react-dom/client';

import App from "./App";
import { CartPage } from "./pages/Cart";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Thanks } from './pages/Thank-for-order';
import { Error404 } from './pages/Error404';

export const rootRouter = createBrowserRouter([
    {
        path:  "/",
        element: <App></App>,
        errorElement: <Error404></Error404>
    },
    {
        path: "/cart",
        element: <CartPage></CartPage>
    },
    {
        path: "/thanks",
        element: <Thanks></Thanks>
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={rootRouter} />
      </Provider>  
    </React.StrictMode>
  );

