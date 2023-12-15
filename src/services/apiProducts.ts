import supabase from './supabase';

export interface ProductProps {
  id: number;
  name: string;
  image: string;
  regularPrice: number;
  discount: number;
  form: string;
  description?: string;
}

export async function getProducts(): Promise<ProductProps[]> {
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    console.error(error);
    throw new Error('Products could not be loaded');
  }

  return data;
}
