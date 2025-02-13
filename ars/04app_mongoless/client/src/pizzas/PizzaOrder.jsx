

function PizzaOrder(){
    return (
        <>
            <div className="container">
                <h3 className="text-center my-4">Order Your Pizza</h3>
                <form>
                    {/* Customer Name */}
                    <div className="form-group">
                        <label htmlFor="customerName">Customer Name:</label>
                        <input type="text" className="form-control" id="customerName" placeholder="Enter your name" />
                    </div>
                    {/* Address */}
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input type="text" className="form-control" id="address" placeholder="Enter your address" />
                    </div>
                    {/* Phone Number */}
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input type="tel" className="form-control" id="phoneNumber" placeholder="Enter your phone number" />
                    </div>
                    <div class="form-group">
                <label for="pizzaSize">Choose your pizza size:</label>
                <select class="form-control" id="pizzaSize">
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
            </div>
           
            <div class="form-group">
                <label>Choose your toppings:</label>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="toppingPepperoni"/>
                    <label class="form-check-label" for="toppingPepperoni">Pepperoni</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="toppingMushrooms"/>
                    <label class="form-check-label" for="toppingMushrooms">Mushrooms</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="toppingOnions"/>
                    <label class="form-check-label" for="toppingOnions">Onions</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="toppingOlives"/>
                    <label class="form-check-label" for="toppingOlives">Olives</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="toppingPeppers"/>
                    <label class="form-check-label" for="toppingPeppers">Bell Peppers</label>
                </div>
            </div>
            
            <div class="form-group">
                <label for="pizzaQuantity">Quantity:</label>
                <input type="number" class="form-control" id="pizzaQuantity" min="1" value="1"/>
            </div>
                    {/* Payment Method */}
                    <div className="form-group">
                        <label htmlFor="paymentMethod">Payment Method:</label>
                        <select className="form-control" id="paymentMethod">
                            <option>Credit Card</option>
                            <option>Debit Card</option>
                            <option>Cash on Delivery</option>
                        </select>
                    </div>
                    {/* Card Details (htmlFor online payment) */}
                    <div className="form-group">
                        <label htmlFor="cardNumber">Card Number:</label>
                        <input type="text" className="form-control" id="cardNumber" placeholder="Enter your card number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cardExpiry">Card Expiry Date:</label>
                        <input type="text" className="form-control" id="cardExpiry" placeholder="MM/YY" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cardCVV">CVV:</label>
                        <input type="text" className="form-control" id="cardCVV" placeholder="Enter CVV" />
                    </div>
                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary btn-block">Order Now</button>
                </form>
            </div>
        </>
    );
}

export default PizzaOrder;
