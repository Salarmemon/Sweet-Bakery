import { useState } from "react";

function OrderForm() {
      const dishes = [
        { id: 1, name: "Zinger Burger", price: 200 },
        { id: 2, name: "Cake", price: 150 },
        { id: 3, name: "Cheese Fries", price: 100 },
        { id: 4, name: "Tea", price: 50 },
        { id: 5, name: "Tanduri Chicken", price: 300 },
        { id: 6, name: "Fruit Chaat", price: 120 }
      ];

      const [selectedDish, setSelectedDish] = useState(localStorage.getItem("selectedDish") ? JSON.parse(localStorage.getItem("selectedDish")) : null);
      const handleSubmit = (e) => {
    
  e.preventDefault();

  const selectedDish = JSON.parse(localStorage.getItem("selectedDish"));
  const dishName = selectedDish.name;
  const price = selectedDish.price
  const name = e.target.name.value;
  const phone = e.target.phone.value;
  const address = e.target.address.value;
  const quantity = e.target.quantity.value;

  const message = `Hello, I want to order: ${dishName}
Name: ${name}
Phone: ${phone}
Address: ${address}
Quantity: ${quantity}
totalCost: PKR ${quantity * price}`;

  const url = `https://wa.me/923228765876?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};
    return (
        <div className="container mx-auto px-4 py-8 font-text font-medium">
        
            <h2 className="text-center text-[clamp(1rem,2vw,2rem)]">Please fill out the form below to place an order</h2>
            <form onSubmit={handleSubmit}className=" mx-auto bg-white p-6 rounded-lg shadow-md  gap-4 mt-6 md:flex-row md:items-center md:gap-6 border border-gray-400 shadow-lg">
                <div className="flex flex-col md:flex-row md:gap-6 justify-center">
                <div className="w-full md:w-1/3 rounded-lg p-4">

                <label htmlFor="name" className="md:ml-4 text-base md:text-lg lg:text-xl">Name:</label>
                <br />
                <input type="text" id="name" name="name" className=" p-2 w-full border border-gray-300 rounded mb-4 md:ml-4 md:w-3/4 lg:w-2/3" required/>
                <br />

                <label htmlFor="phone" className="md:ml-4 text-base md:text-lg lg:text-xl">Phone Number:</label>
                <br />
                <input type="tel" id="phone" name="phone" className="p-2 w-full border md:ml-4 border-gray-300 rounded mb-4 md:w-3/4 lg:w-2/3" required />
                <br />

                <label htmlFor="address" className="md:ml-4 text-base md:text-lg lg:text-xl">Address:</label>
                <br />
                <input type="text" id="address" name="address" className=" p-2 w-full md:ml-4 md:w-3/4 lg:w-2/3  border border-gray-300 rounded" required />
                </div>

                <div className="w-full md:w-1/3 rounded-lg p-4">
                <label htmlFor="dish" className=" text-base md:text-lg lg:text-xl">Dish:</label>
                <br/>
                <select id="dish" name="dish" className="md:w-3/4 p-2 w-full lg:w-2/3 border border-gray-300 rounded mb-4 " required>
                        <option value="" disabled>Select a dish</option>

                    {dishes.map((dish) => (
                        <option key={dish.id} value={dish.id} selected={selectedDish && selectedDish.id === dish.id}>
                            {dish.name} - PKR {dish.price}
                        </option>
                    ))}
                </select>
                <br />
                <label htmlFor="quantity" className=" text-base md:text-lg lg:text-xl">Quantity</label>
                <br />
                <input type="number" id="quantity" name="quantity" className=" md:w-3/4 lg:w-2/3 p-2 w-full border border-gray-300 rounded mb-4" required />
                </div>
                </div>
                
                <div className="flex justify-center mt-4">
                <button type="submit" className="bg-gradient-to-r  from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded hover:from-yellow-600 hover:to-yellow-400 transition-all duration-300 m-auto">Submit Order</button>
                </div>

             </form>
             </div>
       


    
        )

}

export default OrderForm