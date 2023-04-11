export const Cart = ({cartItems, removeFromCart}) => {
    
    return<>
    <div className="rounded justify-content-center align-items-center cart-dropdown">
          
    {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <ul>
        {cartItems.map((item, index) => (
          <li className="my-0 border bg-light text-left"key={index}>{item.name} <button
          className="btn btn-sm btn-danger "
          onClick={() => removeFromCart(item)}>Remove</button></li>
        ))}
      </ul>
    )}
  </div>
  </>

}