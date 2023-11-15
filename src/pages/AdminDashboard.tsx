import { useQuery } from '@tanstack/react-query';
import Button from '../components/Button';
import Input from '../components/Input';
import Wrapper from '../components/Wrapper';
import { getProducts } from '../services/apiProducts';
import Spinner from '../components/Spinner';

export default function AdminDashboard() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ['product'],
    queryFn: getProducts,
  });

  if (isLoading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  return (
    <Wrapper>
      <form>
        <label htmlFor='id'>Unikatowy numer indentyfikacyjny</label>
        <Input id='id' type='text' placeholder='ID' />
        <label htmlFor='name'>Nazwa produktu</label>
        <Input id='name' type='text' placeholder='Name' />
        <label htmlFor='rp'>Cena bez zniżki</label>
        <Input id='rp' type='text' placeholder='RegularPrice' />
        <label htmlFor='dc'>Zniżka</label>
        <Input id='dc' type='text' placeholder='Discount' />
        <label htmlFor='txt'>Opis produktu</label>
        <Input id='txt' type='text' placeholder='Description' />
        <label htmlFor='img'>Dodaj zdjęcie</label>
        <Input id='img' type='file' placeholder='Image' />
        <Button>Dodaj Produkt</Button>
      </form>
      <div>
        <p>Wszystkie produkty:</p>
        {products?.map((prod) => (
          <div key={prod.id}>
            {prod.name}({prod.form})<Button>Edytuj</Button>
            <Button>Usuń</Button>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
