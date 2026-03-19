import React from 'react';
import { AppLayout } from '../../../widgets/layout/ui/AppLayout';
import { ProductCard } from '../../../features/market/ui/ProductCard';

// Mock products
const MOCK_PRODUCTS = [
  { id: '1', name: '프리미엄 무소음 탁상시계', brand: 'TimeGift', price: 15000, originalPrice: 20000, discountRate: 25, imageUrl: '' },
  { id: '2', name: '최고급 가죽 다이어리 세트 (볼펜 포함)', brand: 'ClassicNote', price: 32000, imageUrl: '' },
  { id: '3', name: '친환경 대나무 텀블러 (500ml)', brand: 'EcoMug', price: 8900, originalPrice: 10000, discountRate: 11, imageUrl: '' },
  { id: '4', name: '고속 충전 보조배터리 10000mAh', brand: 'PowerCell', price: 21000, imageUrl: '', isSoldOut: true },
  { id: '5', name: 'VIP 전용 골프우산', brand: 'RainShield', price: 13500, originalPrice: 18000, discountRate: 25, imageUrl: '' },
];

const CATEGORIES = [
  '전체', '사무/문구', '텀블러/머그', '의류/패브릭', '전자기기', '우산/생활용품', 'VIP선물', '개원기념품'
];

export const HomePage: React.FC = () => {
  return (
    <AppLayout>
      {/* Categories (Horizontal) */}
      <section className="bg-white border-b border-[var(--color-border)] mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat, idx) => (
              <button 
                key={cat}
                className={`px-5 py-2.5 text-sm rounded-full border transition-all ${
                  idx === 0 
                    ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] font-medium shadow-sm' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Banner Area */}
      <section className="bg-gray-100 h-[300px] flex items-center mb-8 relative group overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full z-10">
          <div className="bg-white/80 backdrop-blur-xs p-8 rounded-2xl max-w-lg border border-white/40 shadow-xl">
            <span className="inline-block px-3 py-1 bg-[var(--color-primary)] text-white text-xs font-bold rounded-full mb-4">
              이달의 특가
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
              병원 홍보의 첫걸음, <br/>
              품격을 높이는 맞춤 <span className="text-[var(--color-secondary)]">판촉물</span>
            </h1>
            <p className="text-gray-600 mb-6">원장님과 병원의 품격을 높이는 다양한 프리미엄 판촉물을 합리적인 가격에 만나보세요.</p>
          </div>
        </div>
        {/* Placeholder Background Abstract */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-primary-light)]/20 to-transparent pointer-events-none" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow mb-20 block">
        {/* Product Grid Area */}
        <section className="w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">MD 강력 추천 상품</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span className="font-semibold text-[var(--color-text-main)]">인기순</span>
              <span>|</span>
              <span className="hover:text-[var(--color-primary)] cursor-pointer">최신순</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {MOCK_PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
            {MOCK_PRODUCTS.map(product => (
              <ProductCard key={`${product.id}-dup`} product={{...product, id: `${product.id}-dup`}} />
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
};
