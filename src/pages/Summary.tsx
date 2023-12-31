import { useNavigate } from 'react-router-dom';

import { type CartItem, resetCart } from '../store/cartSlice';
import { useCartDispatch, useCartSelector } from '../store/hooks';

import styled from 'styled-components';

import Button from '../components/Button';
import Wrapper from '../components/Wrapper';

export default function Summary() {
  const navi = useNavigate();
  const dispatch = useCartDispatch();
  const cartItems: CartItem[] = useCartSelector((state) => state.cart.items);

  const orderedProducts = cartItems
    .map(
      (item: CartItem) => `${item.name}, ${item.form} - ${item.quantity} szt`
    )
    .join('\n');

  const totalPrice = cartItems.reduce(
    (val: number, item: CartItem) =>
      val + (item.regularPrice - item.discount) * item.quantity,
    0
  );

  const deliveryCost = 20;
  const finalPrice = totalPrice + deliveryCost;
  const formattedTotalPrice = totalPrice.toFixed(2);
  const formattedDeliveryCost = deliveryCost.toFixed(2);
  const formattedFinalPrice = finalPrice.toFixed(2);
  const orderNr = Math.floor(Math.random() * 10000000);

  const handleBuyMail = (): void => {
    const subject = encodeURIComponent(`Zamównienie nr: ${orderNr}`);
    const body = encodeURIComponent(
      `${orderedProducts}
      \nDo zapłaty: ${formattedFinalPrice} zł
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
      import.meta.env.VITE_ORDERS_EMAIL_ADRESS
    }?subject=${subject}&body=${body}`;

    window.location.href = mailTo;

    dispatch(resetCart());
    navi('/cart/finish-order');
  };

  return (
    <Wrapper>
      <Container>
        <Title>Zamówione produkty</Title>
        {cartItems.map((item) => (
          <TxtProd>
            <span>{item.name}, </span>
            <span>{item.form}</span>
            <span> - {item.quantity} szt</span>
          </TxtProd>
        ))}
        <TxtPrice>
          Produkty: <Price>{formattedTotalPrice} zł</Price>
          Przesyłka: <Price>{formattedDeliveryCost} zł</Price>
          Razem: <Price>{formattedFinalPrice} zł</Price>
        </TxtPrice>
        <Button onClick={() => navi(-1)}>Wróć</Button>
        <Button onClick={handleBuyMail}>Kupuję!</Button>
      </Container>
    </Wrapper>
  );
}

const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const TxtProd = styled.p`
  color: ${(props) => props.theme.primary};
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

const TxtPrice = styled.p`
  display: flex;
  font-size: 2.5rem;
  font-weight: 700;
  gap: 1rem;
`;

const Price = styled.span`
  color: ${(props) => props.theme.third};
`;
