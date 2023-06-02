import Card from '@/components/productCart';

export default function CategoriePage({ items, category }) {
  return (
    <>
      <h2>{category} page</h2>

      <div className="flex flex-wrap">
        {items.map((item) => {
          return (
            <Card
              title={item.title}
              price={item.price}
              description={item.description}
              img={item.images[0]}
              rating={item.rating}
            />
          );
        })}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { category } = context.params;

  const { products } = await import('../../../../data/products.json');

  const items = products.filter((product) => product.category === category);

  return {
    props: {
      items: items,
      category: category,
    },
  };
}
