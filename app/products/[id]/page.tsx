import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { Product } from '@/types/product';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

async function getProduct(id: string): Promise<Product | undefined> {
  return products.find((p) => p.id === id);
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  const categoryNames: Record<string, string> = {
    gloves: 'Rubber Gloves',
    masks: 'Safety Masks',
    'walking-sticks': 'Walking Sticks',
    other: 'Other Products',
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/products" className="hover:text-blue-600 transition-colors">
                Products
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-800 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-6"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {categoryNames[product.category] || product.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-gray-800">{product.name}</h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{product.description}</p>

            {/* Purchase Links */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Available on:</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {product.links.amazon && (
                  <a
                    href={product.links.amazon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full relative h-20 rounded-xl hover:shadow-lg transition-all bg-white border-2 border-gray-200 hover:border-orange-400 hover:scale-105 overflow-hidden"
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
                    className="w-full relative h-20 rounded-xl hover:shadow-lg transition-all bg-white border-2 border-gray-200 hover:border-blue-400 hover:scale-105 overflow-hidden"
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
                    className="w-full relative h-20 rounded-xl hover:shadow-lg transition-all bg-white border-2 border-gray-200 hover:border-pink-400 hover:scale-105 overflow-hidden"
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

            {/* Back to Products */}
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All Products
            </Link>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products
              .filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{relatedProduct.name}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{relatedProduct.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

