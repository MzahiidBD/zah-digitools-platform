
import React, { useState } from "react";
import products from "../data/products";

const MainSection = ({ cart, setCart }) => {
  const [activeTab, setActiveTab] = useState("products");

  // Add to cart
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (!exist) {
      setCart([...cart, product]);
    }
  };

  // Remove from cart
  const removeFromCart = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            Premium Digital Tools
          </h2>

          <p className="text-gray-500 mt-3">
            Choose from our curated collection of premium digital products designed <br />
            to boost your productivity and creativity.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-10">
          <div className="bg-white shadow-md rounded-full p-1 flex gap-2">
            
            <button
              onClick={() => setActiveTab("products")}
              className={`px-6 py-2 rounded-full ${
                activeTab === "products"
                  ? "bg-purple-600 text-white"
                  : "text-gray-600"
              }`}
            >
              Products
            </button>

            <button
              onClick={() => setActiveTab("cart")}
              className={`px-6 py-2 rounded-full ${
                activeTab === "cart"
                  ? "bg-purple-600 text-white"
                  : "text-gray-600"
              }`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {/* PRODUCTS SECTION */}
        {activeTab === "products" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((item) => {
              const added = cart.find((cartItem) => cartItem.id === item.id);

              return (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-center mb-4">
                    <img
                      src={item.icon}
                      className="w-12 h-12"
                      alt="icon"
                    />

                    <span className={`px-3 py-1 text-sm rounded-full ${item.tagType}`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>

                  <p className="text-gray-500 text-sm mb-3">
                    {item.description}
                  </p>

                  <p className="text-2xl font-bold mb-4">
                    ${item.price} / {item.period}
                  </p>

                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    {item.features.map((f, i) => (
                      <li key={i}>✔ {f}</li>
                    ))}
                  </ul>

                  <button
                    onClick={() => addToCart(item)}
                    className={`w-full py-2 rounded-lg transition ${
                      added
                        ? "bg-green-600 text-white"
                        : "bg-purple-600 text-white hover:bg-purple-700"
                    }`}
                  >
                    {added ? "Added To Cart ✔" : "Buy Now"}
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* CART SECTION */}
        {activeTab === "cart" && (
          <div className="bg-white p-8 rounded-2xl shadow max-w-4xl mx-auto">

            {cart.length === 0 ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-4">🛒</div>

                <p className="text-gray-500 text-lg">
                  Cart is empty 😢
                </p>
              </div>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b py-4"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.icon}
                        className="w-10 h-10"
                        alt="product"
                      />

                      <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-gray-500">${item.price}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                {/* Total */}
                <div className="flex justify-between mt-6 text-xl font-bold">
                  <span>Total:</span>
                  <span>${totalPrice}</span>
                </div>

                {/* Checkout */}
                <button
                  onClick={clearCart}
                  className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg"
                >
                  Proceed to Checkout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MainSection;
