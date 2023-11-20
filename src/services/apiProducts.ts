import { DataProps } from '../components/Product';
import supabase from './supabase';

export async function getProducts() {
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    console.error(error);
    throw new Error('Products could not be loaded');
  }

  return data;
}

export async function deleteProduct(id: DataProps) {
  const { data, error } = await supabase.from('products').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Products could not be deleted');
  }

  return data;
}
