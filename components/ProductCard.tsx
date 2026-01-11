'use client';

import { Product } from '@/types/product';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const [imageError, setImageError] = useState(false);
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);

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

  const handleColorClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedColorIndex(index);
    setImageError(false);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Navigate to product page with selected color
    const colorParam = selectedColorIndex > 0 ? `?color=${selectedColorIndex}` : '';
    router.push(`/products/${product.id}${colorParam}`);
  };

  return (
    <div onClick={handleCardClick} className="block cursor-pointer">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100">
        <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex items-center justify-center">
          {!imageError ? (
            <Image
              src={getCurrentImage()}
              alt={product.name}
              fill
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <span className="text-gray-400 text-sm">Image not available</span>
            </div>
          )}
          
          {/* Color badge overlay */}
          {product.colors && product.colors.length > 0 && (
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm border border-gray-200">
              <span className="text-xs font-medium text-gray-600">
                {product.colors.length} {product.colors.length === 1 ? 'color' : 'colors'}
              </span>
            </div>
          )}
        </div>
        
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
          
          {/* Color Options */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Available Colors
                </span>
                {hoveredColor && (
                  <span className="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full animate-fadeIn">
                    {hoveredColor}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    type="button"
                    onMouseEnter={() => setHoveredColor(color.name)}
                    onMouseLeave={() => setHoveredColor(null)}
                    onClick={(e) => handleColorClick(e, index)}
                    className={`group/color relative w-7 h-7 rounded-full transition-all duration-200 hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                      selectedColorIndex === index ? 'ring-2 ring-offset-2 ring-blue-500 scale-110' : ''
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
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
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Buy Now Button */}
          {product.links.flipkart && (
            <a
              href={product.links.flipkart}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full flex items-center justify-center gap-3 py-3.5 px-6 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white font-bold rounded-xl shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group/btn z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Animated background shimmer */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out" />
              
              {/* Glow effect */}
              <span className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/10 to-transparent" />
              
              {/* Shopping bag icon */}
              <svg 
                className="w-5 h-5 relative transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:rotate-[-8deg]" 
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
              
              <span className="relative text-base tracking-wide">Buy Now</span>
              
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
          )}
        </div>
      </div>
    </div>
  );
}
