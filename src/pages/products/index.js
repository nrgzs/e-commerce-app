import BrandCart from '@/components/brandCart';
import CategoryCart from '@/components/categoryCart';

export default function CategoriePage({ categories, brands }) {
  return (
    <>
      <div className="text-center max-h-full min-h-screen  ">
        <h2 className="font-bold text-2xl mb-6 text-teal-800">CATEGORIES</h2>
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
