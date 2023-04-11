export const Cart = ({cartItems, removeFromCart}) => {
    
    return<>
    <div className="rounded justify-content-center align-items-center cart-dropdown">
          
    {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <ul>
        {cartItems.map((item, index) => (
          <li className="my-0 border bg-light text-left"key={index}>
          <h6 className="d-inline-block">{item.name}</h6>
          <button
          style={{ fontSize: "10px"  }}

          className="btn btn-danger p-0 mx-1"
          onClick={() => removeFromCart(item)}>Remove</button></li>
        ))}
      </ul>
    )}
  </div>
  </>

}