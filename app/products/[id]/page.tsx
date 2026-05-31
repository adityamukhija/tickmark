import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import { Product } from '@/types/product';
import ProductDetail from '@/components/ProductDetail';
import ProductCard from '@/components/ProductCard';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

async function getProduct(id: string): Promise<Product | undefined> {
  return products.find((p) => p.id === id);
}

export async function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div>
      {/* Page header strip */}
      <div style={{
        borderBottom: '1px solid var(--line)',
        background: 'linear-gradient(180deg,var(--mint-2),var(--paper))',
        padding: '20px 0',
      }}>
        <div className="wrap">
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13.5, color: 'var(--ink-soft)' }}>
            <Link href="/" className="hover:text-green-700 transition-colors">Home</Link>
            <span style={{ color: 'var(--ink-faint)' }}>/</span>
            <Link href="/products" className="hover:text-green-700 transition-colors">Products</Link>
            <span style={{ color: 'var(--ink-faint)' }}>/</span>
            <span style={{ color: 'var(--ink)', fontWeight: 600 }}>{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main product section */}
      <section style={{ padding: '56px 0 80px' }}>
        <div className="wrap">
          <ProductDetail product={product} />
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section style={{ padding: '0 0 80px' }}>
          <div className="wrap">
            <div style={{ borderTop: '1px solid var(--line)', paddingTop: 56 }}>
              <h2 style={{ fontSize: 'clamp(22px,2.8vw,32px)', marginBottom: 36 }}>Related Products</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }} className="related-grid">
                {related.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 860px) { .related-grid { grid-template-columns: repeat(2,1fr) !important; } }
            @media (max-width: 560px) { .related-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>
      )}
    </div>
  );
}
