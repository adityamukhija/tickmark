import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="py-12 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Product Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, we couldn't find the product you're looking for.
        </p>
        <Link
          href="/products"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Browse All Products
        </Link>
      </div>
    </div>
  );
}

