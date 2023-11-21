import { DataProps } from '../components/Product';
import supabase, { supabaseUrl } from './supabase';

export async function getProducts() {
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    console.error(error);
    throw new Error('Products could not be loaded');
  }

  return data;
}

export async function createProduct(newProduct: DataProps) {
  const imageName = `${Math.random()}-${newProduct.image.name}`.replaceAll(
    '/',
    ''
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/product-images/${imageName}`;

  const { data, error } = await supabase
    .from('products')
    .insert([{ ...newProduct, image: imagePath }]);

  if (error) {
    console.error(error);
    throw new Error('Products could not be created');
  }

  const { erorr: storageError } = await supabase.storage
    .from('product-images')
    .upload(imageName, newProduct.image);

  if (storageError) {
    await supabase.from('products').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error(
      'Product image could not be uploaded and the product was not created'
    );
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
