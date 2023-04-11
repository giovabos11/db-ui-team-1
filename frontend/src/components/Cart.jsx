import React from "react";

export const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <>
      <div className="position-relative">
        <div className="rounded justify-content-center align-items-center position-absolute bg-light border p-2 cart-dropdown">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="list-unstyled">
              {cartItems.map((item, index) => (
                <li className="my-0 border-bottom" key={index}>
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
          )}
        </div>
      </div>
    </>
  );
};
