import { resetCart } from '../store/cartSlice';
import { useCartDispatch, useCartSelector } from '../store/hooks';
import Button from '../components/Button';
import Wrapper from '../components/Wrapper';
import { useNavigate } from 'react-router-dom';

export default function Summary() {
  const navi = useNavigate();
  const dispatch = useCartDispatch();
  const cartItems = useCartSelector((state) => state.cart.items);

  const orderedProducts = cartItems
    .map((item) => `${item.name}, ${item.form} - ${item.quantity} szt`)
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
      \nDANE DO WYSYŁKI: (proszę wypełnić)
      \nImię i nazwisko: 
      \nUlica i nr domu/mieszkania: 
      \nKod pocztowy: 
      \nMiasto: 
      \n
      \nDANE DO PRZELEWU:
      \n${import.meta.env.VITE_NAME}
      \nnr konta: ${import.meta.env.VITE_BANK_ACCOUNT}
      \nblik: ${import.meta.env.VITE_BLIK}
      \n
      \n 
      \nW tytule przelewu proszę podać numer zamówienia który jest podany w tytule tego maila!
      \nPo udanej wpłacie wyślemy potwierdzenie zamówienia`
    );

    const mailTo = `mailto:${
      import.meta.env.VITE_EMAIL_ADRESS
    }?subject=${subject}&body=${body}`;

    window.location.href = mailTo;

    dispatch(resetCart());
    navi('/cart/finish-order');
  };

  return (
    <Wrapper>
      <h1>Zamówione produkty</h1>
      {cartItems.map((item) => (
        <p>
          <span>{item.name}, </span>
          <span>{item.form}</span>
          <span> - {item.quantity} szt</span>
        </p>
      ))}
      <p>Produkty: {formattedTotalPrice} zł</p>
      <p>Przesyłka: {deliveryCost} zł</p>
      <p>Razem: {finalPrice} zł</p>
      <Button onClick={handleBuyMail}>Kupuję!</Button>
    </Wrapper>
  );
}
