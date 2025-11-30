# Quick Setup Guide

## First Steps

1. **Update Social Media Links**
   - Edit `components/Footer.tsx`
   - Replace placeholder URLs with your actual social media profiles:
     - Instagram: `https://instagram.com/yourusername`
     - LinkedIn: `https://linkedin.com/company/yourcompany`
     - Facebook: `https://facebook.com/yourpage`

2. **Add Product Images**
   - Add product images to `public/products/` directory
   - Update image paths in `data/products.ts`
   - Recommended image size: 400x300px

3. **Update Product Links**
   - Edit `data/products.ts`
   - Replace placeholder URLs with actual Amazon, Flipkart, and Meesho product links

4. **Update Contact Information**
   - Edit `app/contact/page.tsx`
   - Update email and phone number in the contact information section

5. **Customize Brand Colors** (Optional)
   - Edit `app/globals.css` or component files
   - Current primary color: Blue (#2563eb)
   - You can change colors in Tailwind classes throughout the project

## Running the Site

```bash
# Development
npm run dev

# Production build
npm run build
npm start
```

## Next Steps for Backend Integration

When you're ready to add a backend:

1. Create API routes in `app/api/` directory
2. Update `lib/api.ts` with actual fetch calls
3. Add environment variables to `.env.local`
4. Update contact form to submit to your API

See `README.md` for more details.

