import { useCartSelector } from '../store/hooks';
import Button from './Button';

export default function Summary() {
  const cartItems = useCartSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (val, item) => val + (item.regularPrice - item.discount) * item.quantity,
    0
  );

  const formattedTotalPrice = totalPrice.toFixed(2);

  const deliveryCost = 20;

  return (
    <div>
      <h1>Zamówione produkty</h1>
      {cartItems.map((item) => (
        <p>
          <span>{item.name}, </span>
          <span>{item.form}</span>
          <span> - x{item.quantity}</span>
        </p>
      ))}
      <p>Produkty: {formattedTotalPrice} zł</p>
      <p>Przesyłka: {deliveryCost} zł</p>
      <p>Razem: {totalPrice + deliveryCost} zł</p>
      <Button>Kupuję!</Button>
    </div>
  );
}
