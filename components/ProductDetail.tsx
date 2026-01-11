'use client';

import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Get initial color from URL or default to 0
  const colorFromUrl = searchParams.get('color');
  const initialColorIndex = colorFromUrl ? parseInt(colorFromUrl, 10) : 0;
  
  const [selectedColorIndex, setSelectedColorIndex] = useState(initialColorIndex);
  const [imageError, setImageError] = useState(false);

  // Sync with URL on mount and URL changes
  useEffect(() => {
    const colorParam = searchParams.get('color');
    if (colorParam) {
      const index = parseInt(colorParam, 10);
      if (!isNaN(index) && product.colors && index >= 0 && index < product.colors.length) {
        setSelectedColorIndex(index);
      }
    }
  }, [searchParams, product.colors]);

  const categoryNames: Record<string, string> = {
    'gloves': 'Gloves',
    'masks': 'Masks',
    'walking-sticks': 'Walking Sticks',
    'medical-supplies': 'Medical Supplies',
    'protective-wear': 'Protective Wear',
  };

  const subcategoryNames: Record<string, string> = {
    'industrial': 'Industrial',
    'domestic': 'Domestic',
    'medical': 'Medical',
  };

  // Get the current image based on selected color
  const getCurrentImage = () => {
    if (product.colors && product.colors.length > 0) {
      const color = product.colors[selectedColorIndex];
      if (color.image) {
        return color.image;
      }
    }
    return product.image;
  };

  const handleColorClick = (index: number) => {
    setSelectedColorIndex(index);
    setImageError(false);
    // Update URL with selected color
    const params = new URLSearchParams(searchParams.toString());
    if (index > 0) {
      params.set('color', index.toString());
    } else {
      params.delete('color');
    }
    router.replace(`/products/${product.id}${params.toString() ? `?${params.toString()}` : ''}`, { scroll: false });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {/* Product Image */}
      <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden flex items-center justify-center shadow-lg">
        {!imageError ? (
          <Image
            src={getCurrentImage()}
            alt={product.name}
            fill
            className="object-contain p-8 transition-all duration-300"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-400">Image not available</span>
          </div>
        )}
        
        {/* Color indicator badge */}
        {product.colors && product.colors.length > 0 && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border border-gray-200">
            <span className="text-sm font-semibold text-gray-700">
              {product.colors[selectedColorIndex].name}
            </span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="flex flex-col">
        {/* Category & Subcategory Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-semibold">
            {categoryNames[product.category] || product.category}
          </span>
          {product.subcategory && (
            <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-semibold">
              {subcategoryNames[product.subcategory] || product.subcategory}
            </span>
          )}
        </div>

        <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">{product.name}</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">{product.description}</p>

        {/* Color Options */}
        {product.colors && product.colors.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Available Colors 
              <span className="text-gray-500 font-normal ml-2">({product.colors.length})</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleColorClick(index)}
                  className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-200 border-2 ${
                    selectedColorIndex === index
                      ? 'border-blue-500 bg-blue-50 shadow-md scale-105'
                      : 'border-gray-200 bg-white hover:border-gray-400 hover:shadow-sm'
                  }`}
                >
                  {/* Color circle */}
                  <span
                    className="w-6 h-6 rounded-full shadow-inner relative"
                    style={{ backgroundColor: color.hex }}
                  >
                    {/* Border for light colors */}
                    <span 
                      className="absolute inset-0 rounded-full border-2"
                      style={{ 
                        borderColor: color.hex === '#FFFFFF' || color.name.toLowerCase() === 'white' 
                          ? '#E5E7EB' 
                          : 'transparent' 
                      }}
                    />
                    {/* Shine effect */}
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent" />
                  </span>
                  
                  {/* Color name */}
                  <span className={`text-sm font-medium ${
                    selectedColorIndex === index ? 'text-blue-700' : 'text-gray-700'
                  }`}>
                    {color.name}
                  </span>

                  {/* Checkmark for selected */}
                  {selectedColorIndex === index && (
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Buy Now Button */}
        {product.links.flipkart && (
          <div className="mb-8">
            <a
              href={product.links.flipkart}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-3 py-4 px-8 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group/btn"
            >
              {/* Animated background shimmer */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out" />
              
              {/* Glow effect */}
              <span className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/10 to-transparent" />
              
              {/* Shopping bag icon */}
              <svg 
                className="w-6 h-6 relative transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:rotate-[-8deg]" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" 
                />
              </svg>
              
              <span className="relative tracking-wide">Buy Now on Flipkart</span>
              
              {/* Arrow icon */}
              <svg 
                className="w-5 h-5 relative transition-all duration-300 group-hover/btn:translate-x-1.5" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" 
                />
              </svg>
            </a>
          </div>
        )}

        {/* Back to Products */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to All Products
        </Link>
      </div>
    </div>
  );
}
