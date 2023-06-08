import AddToCartBtn from '@/components/addToCartBtn';
import Image from 'next/image';

Image;
export default function CategoriePage({ item }) {
  return (
    <>
      <div>
        <Image
          src={item.images[0]}
          alt="item img"
          width={300}
          height={300}
        ></Image>
        <div>
          <h2>{item.title}</h2>
          <p>{item.brand}</p>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <p>{item.rating}</p>
          <p>{item.stock}</p>
        </div>
        <AddToCartBtn item={item} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { product } = context.params;
  const { category } = context.params;

  const { products } = await import('../../../../data/products.json');

  const item = products.find(
    (item) => item.id === Number(product) && item.category === category
  );

  return {
    props: {
      item: item,
    },
  };
}
