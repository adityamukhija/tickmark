# TickMark - Safety Products Website

A modern, responsive website for TickMark, showcasing safety products including rubber gloves, masks, and walking sticks.

## Features

- 🏠 **Home Page** - Hero section, featured products, and brand introduction
- 📦 **Products Page** - Browse all products with category filtering and links to Amazon, Flipkart, and Meesho
- ℹ️ **About Us** - Company information and values
- 📧 **Contact Us** - Contact form and social media links
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🔗 **Social Media Integration** - Footer with Instagram, LinkedIn, and Facebook links
- 🚀 **Extensible Architecture** - Ready for future backend integration

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
thetickmark.com/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── products/          # Products page
│   ├── about/             # About Us page
│   ├── contact/           # Contact Us page
│   ├── layout.tsx         # Root layout with Header/Footer
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer with social links
│   └── ProductCard.tsx    # Product display card
├── data/                  # Static data
│   └── products.ts       # Product inventory
├── types/                 # TypeScript types
│   └── product.ts     # Product interface
└── lib/                   # Utility functions
    └── api.ts            # API functions (ready for backend)
```

## Customization

### Adding Products

Edit `data/products.ts` to add or modify products:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  description: 'Product description',
  category: 'gloves' | 'masks' | 'walking-sticks' | 'other',
  image: '/products/image.jpg', // Add images to public/products/
  links: {
    amazon: 'https://amazon.in/dp/...',
    flipkart: 'https://flipkart.com/product/...',
    meesho: 'https://meesho.com/product/...',
  },
}
```

### Updating Social Media Links

Edit `components/Footer.tsx` and update the href attributes for:
- Instagram
- LinkedIn
- Facebook

### Adding Product Images

1. Create a `public/products/` directory
2. Add product images (recommended: 400x300px, JPG/PNG)
3. Update the `image` field in `data/products.ts`

## Future Backend Integration

The project is structured to easily integrate a backend:

1. **API Functions**: `lib/api.ts` contains placeholder functions ready to be replaced with actual API calls
2. **Environment Variables**: Add `NEXT_PUBLIC_API_URL` to `.env.local` when ready
3. **API Routes**: Create API routes in `app/api/` directory for server-side functionality

### Example Backend Integration

When ready, update `lib/api.ts`:

```typescript
export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}/products`);
  return res.json();
}
```

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - UI library

## Deployment

This project can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting service**

For Vercel:
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

## License

Private - TickMark Business
