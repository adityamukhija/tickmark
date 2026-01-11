export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'gloves' | 'masks' | 'walking-sticks' | 'medical-supplies' | 'protective-wear';
  subcategory?: 'industrial' | 'domestic' | 'examination';
  image: string;
  colors?: ProductColor[];
  isTopProduct?: boolean;
  links: {
    amazon?: string;
    flipkart?: string;
    meesho?: string;
  };
}
