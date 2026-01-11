'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const categoryFromUrl = searchParams.get('category') || 'all';
  const subcategoryFromUrl = searchParams.get('subcategory') || 'all';
  
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryFromUrl);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>(subcategoryFromUrl);

  // Sync state with URL on mount and URL changes
  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    const subcategory = searchParams.get('subcategory') || 'all';
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
  }, [searchParams]);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'gloves', name: 'Gloves' },
    { id: 'masks', name: 'Masks' },
    { id: 'walking-sticks', name: 'Walking Sticks' },
    { id: 'medical-supplies', name: 'Medical Supplies' },
    { id: 'protective-wear', name: 'Protective Wear' },
  ];

  const gloveSubcategories = [
    { id: 'all', name: 'All Gloves' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'domestic', name: 'Domestic' },
    { id: 'medical', name: 'Medical' },
  ];

  // Update URL when category changes
  const handleCategoryChange = (categoryId: string) => {
    const params = new URLSearchParams();
    if (categoryId !== 'all') {
      params.set('category', categoryId);
    }
    // Reset subcategory when changing category
    const queryString = params.toString();
    router.push(`/products${queryString ? `?${queryString}` : ''}`, { scroll: false });
  };

  // Update URL when subcategory changes
  const handleSubcategoryChange = (subcategoryId: string) => {
    const params = new URLSearchParams();
    params.set('category', selectedCategory);
    if (subcategoryId !== 'all') {
      params.set('subcategory', subcategoryId);
    }
    router.push(`/products?${params.toString()}`, { scroll: false });
  };

  const filteredProducts: Product[] = products.filter((p) => {
    // Filter by category
    if (selectedCategory !== 'all' && p.category !== selectedCategory) {
      return false;
    }
    // Filter by subcategory (only for gloves)
    if (selectedCategory === 'gloves' && selectedSubcategory !== 'all') {
      return p.subcategory === selectedSubcategory;
    }
    return true;
  });

  // Get top products filtered by current category/subcategory
  const topProducts = products.filter(p => {
    if (!p.isTopProduct) return false;
    
    // Filter by category
    if (selectedCategory !== 'all' && p.category !== selectedCategory) {
      return false;
    }
    
    // Filter by subcategory (only for gloves)
    if (selectedCategory === 'gloves' && selectedSubcategory !== 'all') {
      return p.subcategory === selectedSubcategory;
    }
    
    return true;
  });

  const showTopProducts = topProducts.length > 0;

  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center">
        Our Products
      </h1>
      <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
        Explore our wide range of safety products. Click on any product to view details 
        and purchase directly from Flipkart.
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                : 'bg-white border-2 border-gray-300 text-gray-800 hover:border-blue-500 hover:text-blue-600 hover:shadow-md'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Subcategory Filter for Gloves */}
      {selectedCategory === 'gloves' && (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {gloveSubcategories.map((sub) => (
            <button
              key={sub.id}
              onClick={() => handleSubcategoryChange(sub.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedSubcategory === sub.id
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 scale-105'
                  : 'bg-gray-100 border border-gray-300 text-gray-700 hover:border-emerald-500 hover:text-emerald-600 hover:shadow-sm'
              }`}
            >
              {sub.name}
            </button>
          ))}
        </div>
      )}

      {/* Add margin when no subcategory filter */}
      {selectedCategory !== 'gloves' && <div className="mb-6" />}

      {/* Top Products Section */}
      {showTopProducts && topProducts.length > 0 && (
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-300"></div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <svg className="w-7 h-7 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Top Products</span>
              <svg className="w-7 h-7 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-300"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            {topProducts.map((product) => (
              <div key={product.id} className="relative">
                {/* Top Product Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 text-white px-4 py-1.5 rounded-full shadow-lg border-2 border-amber-300 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-bold text-sm uppercase tracking-wide">Top Product</span>
                  </div>
                </div>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-12"></div>
        </div>
      )}

      {/* Results count */}
      <div className="text-center mb-8">
        <span className="text-gray-600">
          Showing <span className="font-semibold text-gray-800">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'product' : 'products'}
          {selectedCategory !== 'all' && (
            <span> in <span className="font-semibold text-blue-600">{categories.find(c => c.id === selectedCategory)?.name}</span></span>
          )}
          {selectedCategory === 'gloves' && selectedSubcategory !== 'all' && (
            <span> → <span className="font-semibold text-emerald-600">{gloveSubcategories.find(s => s.id === selectedSubcategory)?.name}</span></span>
          )}
        </span>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-700 text-lg">No products found in this category.</p>
        </div>
      )}
    </>
  );
}

export default function ProductsPage() {
  return (
    <div className="py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <Suspense fallback={
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        }>
          <ProductsContent />
        </Suspense>
      </div>
    </div>
  );
}
