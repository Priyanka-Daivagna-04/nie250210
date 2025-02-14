import { useEffect, useState } from "react";
import PageHeader from "../header/PageHeader";
import axios from "axios";

function PizzaList() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const readAllPizzas = async () => {
    try {
      const baseUrl = "http://localhost:8080";
      const response = await axios.get(`${baseUrl}/pizzas`);
      setPizzas(response.data);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch pizzas. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    readAllPizzas();
  }, []);

  return (
    <>
      <h2 className="text-center">Pizza Delivery</h2>
      <PageHeader PageNumber={2} />

      {loading && <p className="text-center">Loading pizzas...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      {!loading && !error && (
        <table className="table table-striped table-bordered thick-border">
          <thead>
            <tr className="table-primary">
              <th scope="col">ID</th>
              <th scope="col">Pizza Name</th>
              <th scope="col">Size</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>
            {pizzas.map((pizza) => (
              <tr key={pizza.id}>
                <th scope="row">{pizza.id}</th>
                <td>{pizza.name}</td>
                <td>{pizza.size}</td>
                <td>{pizza.price}</td>
                <td>{pizza.category}</td> {/* Fixed mapping */}
                <td>
                  <a href={`/pizzas/edit/PI1/${pizza.id}`} className="btn btn-warning">
                    Edit
                  </a>
                  <a href={`/pizzas/order/PI1/${pizza.id}`} className="btn btn-danger">
                    Order
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <style>
        {`
          .table-bordered th, .table-bordered td {
            border: 1px solid #333 !important; /* Darker border */
          }
          thead {
            background-color: #003366; /* Dark blue */
            color: white;
          }
          tbody tr:nth-child(even) {
            background-color: #cce6ff; /* Light blue */
          }
          tbody tr:nth-child(odd) {
            background-color: #ffffff; /* White */
          }
          tbody tr:hover {
            background-color: #99ccff !important; /* Hover effect */
            transition: 0.3s;
          }
          th, td {
            text-align: center;
            font-weight: bold;
            padding: 10px;
            color: #222; /* Dark gray for text */
          }
          .text-center {
            text-align: center;
          }
          .text-danger {
            color: red;
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
}

export default PizzaList;
