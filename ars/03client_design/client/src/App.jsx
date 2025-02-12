import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PizzaList from './pizzas/PizzaList';
import PizzaEdit from './pizzas/PizzaEdit';
import PizzaOrder from './pizzas/PizzaOrder';
import PizzaOffer from './pizzas/PizzaOffer';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PizzaList />} />
            <Route path="/pizzas/list" element={<PizzaList />} />
            <Route path="/pizzas/order/:id" element={<PizzaOrder />} />
            <Route path="/pizzas/edit/:id" element={<PizzaEdit />} />
            <Route path="/pizzas/offer" element={<PizzaOffer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
