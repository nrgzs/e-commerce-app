import Card from '@/components/productCart';

export default function CategoriePage({ items, category }) {
  return (
    <>
      <div className=" text-center max-h-full min-h-screen mt-4">
        <h2 className="font-bold text-2xl mb-6 text-teal-800">
          {category.toUpperCase()} PAGE
        </h2>

        <div className="flex flex-wrap gap-6 justify-center">
          {items.map((item) => {
            return (
              <Card
                key={item.id}
                category={item.category}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                img={item.images[0]}
                rating={item.rating}
              />
            );
          })}
        </div>
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
