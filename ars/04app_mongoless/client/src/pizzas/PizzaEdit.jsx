import React from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../header/PageHeader';

function PizzaEdit() {
  const { id } = useParams();

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Customize Your Pizza</h2>
        <h3>
          <a href="/pizzas/list" className="btn btn-warning">Go Back</a>
        </h3>
        
        <PageHeader PageNumber={1} />
        
        <form>
          <div className="mb-3">
            <label htmlFor="pizzaSize" className="form-label">Pizza Size</label>
            <select className="form-select" id="pizzaSize">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="pizzaCrust" className="form-label">Pizza Crust</label>
            <select className="form-select" id="pizzaCrust">
              <option value="thin">Thin</option>
              <option value="regular">Regular</option>
              <option value="stuffed">Stuffed</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Toppings</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="pepperoni" id="pepperoni" />
              <label className="form-check-label" htmlFor="pepperoni">Pepperoni</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="mushrooms" id="mushrooms" />
              <label className="form-check-label" htmlFor="mushrooms">Mushrooms</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="onions" id="onions" />
              <label className="form-check-label" htmlFor="onions">Onions</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="sausage" id="sausage" />
              <label className="form-check-label" htmlFor="sausage">Sausage</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="bacon" id="bacon" />
              <label className="form-check-label" htmlFor="bacon">Bacon</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="extraCheese" id="extraCheese" />
              <label className="form-check-label" htmlFor="extraCheese">Extra Cheese</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
}

export default PizzaEdit;
