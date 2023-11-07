import { type CartItem, addToCart, removeFromCart } from '../store/cartSlice';
import { useCartDispatch, useCartSelector } from '../store/hooks';

export default function CartItems() {
  const cartItems = useCartSelector((state) => state.cart.items);
  const dispatch = useCartDispatch();

  const totalPrice = cartItems.reduce(
    (val, item) => val + item.price * item.quantity,
    0
  );

  const formattedTotalPrice = totalPrice.toFixed(2);

  function handleAddToCart(item: CartItem) {
    dispatch(addToCart(item));
  }

  function handleRemoveFromCart(id: number) {
    dispatch(removeFromCart(id));
  }

  return (
    <>
      {cartItems.length === 0 && <p>Nie masz nic w koszu!</p>}
      {cartItems.length > 0 && (
        <>
          <ul>
            {cartItems.map((item) => {
              const fotmattedPrice = `${item.price.toFixed(2)} zł`;

              return (
                <li key={item.id}>
                  <div>
                    <span>{item.name}</span>
                    <span>({fotmattedPrice})</span>
                  </div>
                  <div>
                    <button onClick={() => handleRemoveFromCart(item.id)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleAddToCart(item)}>+</button>
                  </div>
                </li>
              );
            })}
          </ul>
          <p>Całkowity koszt: {formattedTotalPrice} zł</p>
        </>
      )}
    </>
  );
}
