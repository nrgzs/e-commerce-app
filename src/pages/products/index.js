import CategoryCart from '@/components/categoryCart';

export default function CategoriePage({ data }) {
  return (
    <>
      <div className="main">
        <h2>All categories</h2>
        <div className="flex flex-wrap gap-4 justify-center items-center content-center">
          {data.map((c) => {
            return <CategoryCart key={c} category={c} />;
          })}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { products } = await import('../../../data/products.json');
  const data = new Set([]);
  products.map((p) => {
    data.add(p.category);
  });

  return {
    props: {
      data: Array.from(data),
    },
  };
}
