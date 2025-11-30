'use client';

import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link href={`/products/${product.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
        <div className="relative h-64 bg-gray-100 overflow-hidden flex items-center justify-center">
          {!imageError ? (
            <Image
              src={product.image}
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
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
          <div className="flex flex-wrap gap-2">
            {product.links.amazon && (
              <a
                href={product.links.amazon}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[100px] relative h-12 rounded-lg hover:shadow-md transition-all z-10 bg-white border-2 border-gray-200 hover:border-orange-400 hover:scale-105 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src="/products/amazon.png"
                  alt="Buy on Amazon"
                  fill
                  className="object-cover"
                />
              </a>
            )}
            {product.links.flipkart && (
              <a
                href={product.links.flipkart}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[100px] relative h-12 rounded-lg hover:shadow-md transition-all z-10 bg-white border-2 border-gray-200 hover:border-blue-400 hover:scale-105 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src="/products/flipkart.png"
                  alt="Buy on Flipkart"
                  fill
                  className="object-cover"
                />
              </a>
            )}
            {product.links.meesho && (
              <a
                href={product.links.meesho}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[100px] relative h-12 rounded-lg hover:shadow-md transition-all z-10 bg-white border-2 border-gray-200 hover:border-pink-400 hover:scale-105 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src="/products/meesho.png"
                  alt="Buy on Meesho"
                  fill
                  className="object-cover"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

