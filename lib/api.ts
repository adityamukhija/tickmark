// This file is prepared for future backend integration
// When you're ready to add a backend, you can replace these functions
// with actual API calls

import { Product } from '@/types/product';

// Future API endpoint base URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

export async function fetchProducts(): Promise<Product[]> {
  // For now, return local data
  // In the future, replace with: const res = await fetch(`${API_BASE_URL}/products`);
  const { products } = await import('@/data/products');
  return products;
}

export async function fetchProductById(id: string): Promise<Product | null> {
  // For now, return local data
  // In the future, replace with: const res = await fetch(`${API_BASE_URL}/products/${id}`);
  const { products } = await import('@/data/products');
  return products.find(p => p.id === id) || null;
}

export async function submitContactForm(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): Promise<{ success: boolean; message: string }> {
  // For now, just return success
  // In the future, replace with: const res = await fetch(`${API_BASE_URL}/contact`, { method: 'POST', body: JSON.stringify(data) });
  return { success: true, message: 'Message sent successfully' };
}







