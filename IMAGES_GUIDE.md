# Images and Logos Setup Guide

## 📸 Product Images

### Step 1: Add Product Images

1. **Place your product images** in the `public/products/` directory:
   ```
   public/
   └── products/
       ├── gloves.jpg
       ├── masks.jpg
       ├── walking-stick.jpg
       ├── disposable-gloves.jpg
       ├── surgical-masks.jpg
       └── folding-stick.jpg
   ```

2. **Recommended Image Specifications:**
   - **Format:** JPG, PNG, or WebP
   - **Size:** 800x600px or 1200x900px (aspect ratio 4:3)
   - **File Size:** Under 500KB per image (optimize for web)
   - **Naming:** Use lowercase with hyphens (e.g., `rubber-gloves.jpg`)

### Step 2: Update Product Data

Edit `data/products.ts` and update the `image` field for each product:

```typescript
{
  id: '1',
  name: 'Premium Rubber Gloves',
  image: '/products/gloves.jpg',  // ← Update this path
  // ... rest of product data
}
```

**Important:** The path starts with `/` because it's in the `public` folder.

### Step 3: Using External Images (Optional)

If your images are hosted elsewhere, you can use full URLs:

```typescript
image: 'https://yourdomain.com/images/gloves.jpg'
```

**Note:** Make sure the external domain is allowed in `next.config.ts` (already configured).

---

## 🎨 Logo Setup

### Option 1: Text Logo (Current)

Currently using text "TickMark" in the header. This is already set up.

### Option 2: Image Logo

To add an image logo:

1. **Add your logo file** to `public/`:
   ```
   public/
   └── logo.png  (or logo.svg, logo.jpg)
   ```

2. **Update the Header component** (`components/Header.tsx`):

Replace this:
```typescript
<Link href="/" className="text-2xl font-bold text-blue-600">
  TickMark
</Link>
```

With this:
```typescript
<Link href="/" className="flex items-center">
  <Image
    src="/logo.png"
    alt="TickMark Logo"
    width={120}
    height={40}
    className="h-10 w-auto"
    priority
  />
</Link>
```

Don't forget to import Image at the top:
```typescript
import Image from 'next/image';
```

**Logo Specifications:**
- **Format:** PNG (with transparency) or SVG (recommended)
- **Size:** 200-300px wide, height proportional
- **Background:** Transparent (for PNG) or white background
- **File Size:** Under 50KB

---

## 🔖 Favicon (Browser Tab Icon)

### Step 1: Add Favicon Files

Add these files to `app/` directory:

```
app/
├── favicon.ico          (16x16, 32x32, 48x48 sizes)
├── icon.png             (512x512 for PWA)
└── apple-icon.png       (180x180 for Apple devices)
```

### Step 2: Next.js Auto-Detection

Next.js automatically detects these files:
- `app/favicon.ico` - Standard favicon
- `app/icon.png` - Modern icon
- `app/apple-icon.png` - iOS home screen icon

**Favicon Specifications:**
- **favicon.ico:** 16x16, 32x32, 48x48 (multi-size ICO file)
- **icon.png:** 512x512px PNG
- **apple-icon.png:** 180x180px PNG

### Step 3: Generate Favicons (Online Tools)

Use these tools to generate favicons:
- [Favicon.io](https://favicon.io/) - Generate from text/image
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Complete favicon package
- [Canva](https://www.canva.com/) - Design your logo first

---

## 🖼️ Hero Section Image (Optional)

To add a background image to the hero section on the home page:

1. **Add image** to `public/`:
   ```
   public/
   └── hero-bg.jpg
   ```

2. **Update** `app/page.tsx` hero section:

```typescript
<section 
  className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 relative"
  style={{
    backgroundImage: 'url(/hero-bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="absolute inset-0 bg-blue-900/60"></div>
  <div className="container mx-auto px-4 relative z-10">
    {/* ... rest of content */}
  </div>
</section>
```

---

## 📝 Quick Checklist

- [ ] Add product images to `public/products/`
- [ ] Update image paths in `data/products.ts`
- [ ] Add logo to `public/logo.png` (optional)
- [ ] Update Header component if using image logo
- [ ] Add favicon files to `app/` directory
- [ ] Test images load correctly
- [ ] Optimize images for web (compress if needed)

---

## 🛠️ Image Optimization Tips

1. **Use WebP format** for better compression (Next.js auto-converts)
2. **Compress images** before uploading:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
3. **Use appropriate sizes:**
   - Product cards: 400x300px
   - Product detail: 800x600px
   - Logo: 200-300px wide
4. **Lazy loading** is automatic with Next.js Image component

---

## 🚨 Troubleshooting

**Images not showing?**
- Check file path starts with `/` (for public folder)
- Verify file exists in `public/` directory
- Check file name matches exactly (case-sensitive)
- Clear browser cache

**Logo too big/small?**
- Adjust `width` and `height` props in Image component
- Use `className` for responsive sizing

**Favicon not updating?**
- Clear browser cache
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check file is named correctly (`favicon.ico`)




