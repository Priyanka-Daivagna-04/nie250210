import PageHeader from "../header/PageHeader";

function PizzaList() {
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
          <tr>
            <th scope="row">PI2</th>
            <td>Paneer Pizza</td>
            <td>Regular</td>
            <td>100/-</td>
            <td>Veg</td>
            <td>
              <a href="/pizzas/edit/PI2" className="btn btn-warning">Edit</a>
              <a href="/pizzas/order/PI2" className="btn btn-danger">Order</a>
            </td>
          </tr>
          <tr>
            <th scope="row">PI3</th>
            <td>Veg Loaded</td>
            <td>Regular</td>
            <td>200/-</td>
            <td>Veg</td>
            <td>
              <a href="/pizzas/edit/PI3" className="btn btn-warning">Edit</a>
              <a href="/pizzas/order/PI3" className="btn btn-danger">Order</a>
            </td>
          </tr>
          <tr>
            <th scope="row">PI4</th>
            <td>Chicken Fest</td>
            <td>Regular</td>
            <td>200/-</td>
            <td>Non-Veg</td>
            <td>
              <a href="/pizzas/edit/PI4" className="btn btn-warning">Edit</a>
              <a href="/pizzas/order/PI4" className="btn btn-danger">Order</a>
            </td>
          </tr>
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
