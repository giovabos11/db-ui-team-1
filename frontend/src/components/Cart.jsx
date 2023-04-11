import React from "react";

export const Cart = ({ cartItems, setCartItems }) => {
  const clearCart = () => {
    setCartItems([])
  }
  const removeFromCart = (itemToRemove) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.id !== itemToRemove.id
    );
    setCartItems(updatedCartItems);
  };
  return (
    <>
      <div className="position-relative">
        <div className="rounded justify-content-center align-items-center position-absolute bg-light border  cart-dropdown">
          {cartItems.length === 0 ? (
            <p className="m-0">Your cart is empty.</p>
          ) : (
            <>
              <ul className="list-unstyled m-0">
                {cartItems.map((item, index) => (
                  <li className="my-0 border-bottom pb-2" key={index}>
                    <h6 className="d-inline-block">{item.name}</h6>
                    <button
                      style={{ fontSize: "10px" }}
                      className="btn btn-danger p-1 mx-1"
                      onClick={() => removeFromCart(item)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="text-center mt-2 pb-2">
                <button
                  style={{ fontSize: "9px", color: "yellow"}}
                  className=" btn btn-danger p-1 mx-1"
                  onClick={() => {
                    clearCart()

                  }}
                >
                  Clear
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
