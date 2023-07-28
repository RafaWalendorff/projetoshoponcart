import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HeaderPartial } from "./Partials/HeaderPartial/HeaderPartial";
import { Store } from "./pages/Store/Store";
import { HomePage } from "./pages/Home/HomePage";
import { AppContext, useAppContext } from "./store/AppContext";
import { Cart } from "./pages/Cart/Cart";
import { fetchCartItemsAction } from './store/actions';

const initialState = {
  cart: [],
  products: []
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppContext initialState={initialState}>
          <FetchCartEffect />
          <HeaderPartial />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/store" element={<Store />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </AppContext>
      </div>
    </BrowserRouter>
  );
}


  const FetchCartEffect = () => {
    const { dispatch } = useAppContext();
  
    useEffect(() => {
      fetchCartItemsAction(dispatch);
    }, [dispatch]);
  
    return null;
  };
export default App;


