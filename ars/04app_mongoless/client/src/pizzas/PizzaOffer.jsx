

function PizzaOffer() {
 

  return (
    <>
    
       <div className="container mt-5">
       <h4>
          <a href="/pizzas/list" className="btn btn-warning">Go Back</a>
        </h4>
        <div className="text-center">
            
            <h3 className="display-4">Special Pizza Offer!</h3>
            <p className="lead">Get 50% off on all large pizzas!</p>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <img src="https://via.placeholder.com/300" className="card-img-top" alt="Pepperoni Pizza"/>
                    <div className="card-body">
                        <h5 className="card-title">Pepperoni Pizza</h5>
                        <p className="card-text">Classic pepperoni pizza with mozzarella cheese.</p>
                        <a href="#" className="btn btn-primary">Order Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <img src="https://via.placeholder.com/300" className="card-img-top" alt="Margherita Pizza"/>
                    <div className="card-body">
                        <h5 className="card-title">Margherita Pizza</h5>
                        <p className="card-text">Fresh tomatoes, basil, and mozzarella cheese.</p>
                        <a href="#" className="btn btn-primary">Order Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <img src="https://via.placeholder.com/300" className="card-img-top" alt="BBQ Chicken Pizza"/>
                    <div className="card-body">
                        <h5 className="card-title">BBQ Chicken Pizza</h5>
                        <p className="card-text">Grilled chicken with BBQ sauce and onions.</p>
                        <a href="#" className="btn btn-primary">Order Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  );
}

export default PizzaOffer;
