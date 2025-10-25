import EASleepSpecificationContent from '@/components/product/easleep/EASleepSpecificationContent';
import EASleepSpecificationContentMobile from '@/components/product/easleep/EASleepSpecificationContentMobile';
import { getBraincoProducts } from '@/lib/api';

export default async function EASleepSpecificationPage() {
  let products: any[] = [];

  try {
    const response = await getBraincoProducts();
    // Filter products by code 'easleep'
    products = response.data?.filter((item: any) => item.code === 'easleep') || [];

    // Sort by price
    products.sort((a: any, b: any) => a.price - b.price);
  } catch (error) {
    console.error('Failed to fetch products:', error);
    // Fallback to mock data if API fails
    products = [
      {
        id: 1,
        code: 'easleep',
        name: 'Easleep 舒适版',
        price: 199900, // Price in cents
        oldPrice: null,
      },
      {
        id: 2,
        code: 'easleep',
        name: 'Easleep 奢华版',
        price: 299900,
        oldPrice: 349900,
      },
      {
        id: 3,
        code: 'easleep',
        name: 'Easleep 尊享版',
        price: 399900,
        oldPrice: null,
      },
    ];
  }

  return (
    <>
      {/* Desktop Content */}
      <div className="hidden lg:block">
        <EASleepSpecificationContent products={products} />
      </div>

      {/* Mobile Content */}
      <div className="block lg:hidden">
        <EASleepSpecificationContentMobile products={products} />
      </div>
    </>
  );
}
