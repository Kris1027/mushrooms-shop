import { useCartSelector } from '../store/hooks';
import Button from './Button';

export default function Summary() {
  const cartItems = useCartSelector((state) => state.cart.items);

  const orderedProducts = cartItems
    .map((item) => `${item.name}, ${item.form} - x${item.quantity}`)
    .join('\n');

  const totalPrice = cartItems.reduce(
    (val, item) => val + (item.regularPrice - item.discount) * item.quantity,
    0
  );

  const formattedTotalPrice = totalPrice.toFixed(2);
  const deliveryCost = 20;
  const orderNr = Math.floor(Math.random() * 10000000);
  const finalPrice = totalPrice + deliveryCost;

  const handleBuyMail = () => {
    const subject = encodeURIComponent(`Zamównienie nr: ${orderNr}`);
    const body = encodeURIComponent(
      `${orderedProducts}
      \nDo zapłaty: ${finalPrice} zł
      \n DANE DO WYSYŁKI: (proszę wypełnić)
      \n Imię i nazwisko: 
      \n Ulica i nr domu/mieszkania: 
      \n Kod pocztowy: 
      \n Miasto: 
      \n
      \n DANE DO PRZELEWU:
      \n ${import.meta.env.VITE_NAME}
      \n nr konta: ${import.meta.env.VITE_BANK_ACCOUNT}
      \n blik: ${import.meta.env.VITE_BLIK}
      \n
      \n 
      \n W tytule przelewu proszę podać numer zamówienia który jest podany w tytule tego maila!
      \n Po udanej wpłacie wyślemy potwierdzenie zamówienia`
    );

    const mailTo = `mailto:${
      import.meta.env.VITE_EMAIL_ADRESS
    }?subject=${subject}&body=${body}`;

    window.location.href = mailTo;
  };

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
      <p>Razem: {finalPrice} zł</p>
      <Button onClick={handleBuyMail}>Kupuję!</Button>
    </div>
  );
}
