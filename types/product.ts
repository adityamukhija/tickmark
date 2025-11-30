export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'gloves' | 'masks' | 'walking-sticks' | 'other';
  image: string;
  links: {
    amazon?: string;
    flipkart?: string;
    meesho?: string;
  };
}

