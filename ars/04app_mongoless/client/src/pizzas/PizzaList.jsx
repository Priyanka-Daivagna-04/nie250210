import { useEffect, useState } from "react";
import PageHeader from "../header/PageHeader";
import axios from "axios";

function PizzaList() {
  const [pizzas,setPizzas]=useState([]);
  const readAllPizzas = async () => {
      
       try{
          const baseUrl = 'http://localhost:8080'
          const response = await axios.get(`${baseUrl}/pizzas`);
          setPizzas(response.data);
       }catch(error){
          alert(`Server Error`);
       }
  };
  useEffect(()=>{readAllPizzas();},[]);
  return (
    <>
      <h2 className="text-center">Pizza Delivery</h2>
      <PageHeader PageNumber={2} />
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
          
          { pizzas.map( (flight)=>{
                            return(
                              <tr>
                              <th scope="row">PI1</th>
                              <td>Margherita</td>
                              <td>Medium</td>
                              <td>210/-</td>
                              <td>Veg</td>
                              <td>
                                <a href="/pizzas/edit/PI1" className="btn btn-warning">Edit</a>
                                <a href="/pizzas/order/PI1" className="btn btn-danger">Order</a>
                              </td>
                            </tr>

                            );
                        })
                        }
        </tbody>
      </table>
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
        `}
      </style>
    </>
  );
}

export default PizzaList;
