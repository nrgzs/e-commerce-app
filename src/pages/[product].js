import AddToCartBtn from '@/components/addToCartBtn';
import SaveBtn from '@/components/saveBtn';
import Image from 'next/image';

Image;
export default function ProductPage({ item }) {
  return (
    <>
      <div className=" h-[85vh] flex gap-6">
        <div>
          <Image
            src={item.images[0]}
            alt="item img"
            width={400}
            height={400}
          ></Image>
        </div>
        <div className=" flex flex-col gap-6 flex-grow-0">
          <h2 className="font-bold text-2xl text-teal-800">{item.title}</h2>
          <p className="font-bold ">{item.brand}</p>
          <p>{item.description}</p>
          <p>Price: {item.price}</p>
          <p>Rating {item.rating}</p>

          <div className="relative w-44">
            <AddToCartBtn id={item.id} />
            <SaveBtn itemId={item.id} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { product } = context.params;
  const { category } = context.params;
  const { products } = await import('../../data/products.json');

  const item = products.find((item) => item.id === Number(product));
  if (!item) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      item: item || null,
    },
  };
}
