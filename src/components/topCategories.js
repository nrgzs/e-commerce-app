import CategoryCart from './categoryCart';

const categories = [
  'bag',
  'electronic',
  'clothing',
  'headphones',
  'accessories',
  'planes',
];

export default function TopCategories({data}) {
  return (
    <div className=" flex flex-col gap-6  justify-center content-center text-center font-bold my-4 mx-auto">
      <h2 className=" text-2xl text-teal-700 ">Top Categories</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {data.map((cat) => {
          return <CategoryCart key={cat} category={cat} />;
        })}
      </div>
    </div>
  );
}
