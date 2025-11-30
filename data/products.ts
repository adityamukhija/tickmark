import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Rubber Gloves',
    description: 'High-quality rubber gloves for industrial and household use. Durable and comfortable.',
    category: 'gloves',
    image: '/products/gloves.png',
    links: {
      amazon: 'https://amazon.in/dp/example',
      flipkart: 'https://flipkart.com/product/example',
      meesho: 'https://meesho.com/product/example',
    },
  },
  {
    id: '2',
    name: 'N95 Safety Masks',
    description: 'Protective N95 masks for respiratory safety. Certified and comfortable.',
    category: 'masks',
    image: '/products/masks.jpg',
    links: {
      amazon: 'https://amazon.in/dp/example',
      flipkart: 'https://flipkart.com/product/example',
      meesho: 'https://meesho.com/product/example',
    },
  },
  {
    id: '3',
    name: 'Adjustable Walking Stick',
    description: 'Ergonomic walking stick with adjustable height. Lightweight and sturdy.',
    category: 'walking-sticks',
    image: '/products/walking-stick.jpg',
    links: {
      amazon: 'https://amazon.in/dp/example',
      flipkart: 'https://flipkart.com/product/example',
      meesho: 'https://meesho.com/product/example',
    },
  },
  {
    id: '4',
    name: 'Disposable Gloves Pack',
    description: 'Box of 100 disposable gloves. Perfect for medical and food handling.',
    category: 'gloves',
    image: '/products/disposable-gloves.jpg',
    links: {
      amazon: 'https://amazon.in/dp/example',
      flipkart: 'https://flipkart.com/product/example',
    },
  },
  {
    id: '5',
    name: 'Surgical Masks',
    description: '3-ply surgical masks with high filtration efficiency.',
    category: 'masks',
    image: '/products/surgical-masks.jpg',
    links: {
      amazon: 'https://amazon.in/dp/example',
      meesho: 'https://meesho.com/product/example',
    },
  },
  {
    id: '6',
    name: 'Folding Walking Stick',
    description: 'Compact folding walking stick. Easy to carry and store.',
    category: 'walking-sticks',
    image: '/products/folding-stick.jpg',
    links: {
      flipkart: 'https://flipkart.com/product/example',
      meesho: 'https://meesho.com/product/example',
    },
  },
  {
    id: '7',
    name: 'Bouffant Cap',
    description: 'Disposable bouffant cap for hair protection in medical, food service, and industrial environments. Comfortable and breathable.',
    category: 'other',
    image: '/products/buoffant-cap.png',
    links: {
      amazon: 'https://amazon.in/dp/example',
      flipkart: 'https://flipkart.com/product/example',
      meesho: 'https://meesho.com/product/example',
    },
  },
];

