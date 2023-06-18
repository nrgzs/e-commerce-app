import BrandCart from '@/components/brandCart';
import CategoryCart from '@/components/categoryCart';

export default function CategoriePage({ categories, brands }) {
  return (
    <>
      <div className="main">
        <h2>All Products</h2>
        <h2>categories</h2>
        <div className="flex flex-wrap gap-4 justify-center items-center content-center">
          {categories.map((c) => {
            return <CategoryCart key={c} category={c} />;
          })}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { products } = await import('../../../data/products.json');
  const dataCategories = new Set([]);

  products.map((p) => {
    dataCategories.add(p.category);
  });

  return {
    props: {
      categories: Array.from(dataCategories),
    },
  };
}
