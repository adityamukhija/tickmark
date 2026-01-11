# Background Images Guide

## Best Places to Add Background Images

### 1. Hero Section (Home Page) - **RECOMMENDED**
The hero section is the first thing visitors see. A background image here creates immediate impact.

**Image Suggestions:**
- Safety equipment arranged professionally
- Clean medical/industrial setting
- Abstract safety-themed image
- Professional workspace with safety products

**Recommended Size:** 1920x1080px (Full HD) or 2560x1440px (2K)
**Format:** JPG or WebP (optimized)

### 2. About Us Page
A subtle background image can add visual interest.

### 3. Contact Page
A light background image can make the page more engaging.

---

## How to Add Background Image

### Step 1: Add Your Image
Place your background image in the `public/` folder:
```
public/
└── hero-bg.jpg  (or hero-bg.png, hero-bg.webp)
```

### Step 2: Image is Already Configured!
The hero section code already supports background images. Just add your image file and it will work.

### Step 3: Update Image Path (if needed)
If your image has a different name, update the path in `app/page.tsx`:
```typescript
backgroundImage: 'url(/your-image-name.jpg)',
```

---

## Image Requirements

**Hero Section Background:**
- **Size:** 1920x1080px minimum
- **Aspect Ratio:** 16:9 (landscape)
- **File Size:** Under 500KB (optimize for web)
- **Format:** JPG (for photos) or WebP (best compression)

**Tips:**
- Use images with darker areas so white text is readable
- Avoid busy images that distract from text
- Consider adding an overlay (already included in code)
- Test on mobile devices - ensure text is readable

---

## Free Image Resources

1. **Unsplash** (https://unsplash.com)
   - Search: "safety equipment", "medical supplies", "industrial safety"
   - Free, high-quality images

2. **Pexels** (https://pexels.com)
   - Search: "safety products", "protective gear"
   - Free stock photos

3. **Pixabay** (https://pixabay.com)
   - Free images and vectors

---

## Current Implementation

The hero section now has:
- ✅ Background image support
- ✅ Dark overlay (60% opacity) for text readability
- ✅ Responsive design
- ✅ Fallback gradient if image doesn't load

You just need to add your image file!







