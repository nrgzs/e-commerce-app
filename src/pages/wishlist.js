import { useDispatch, useSelector } from 'react-redux';
import { saveAmount } from '@/redux/saved/saveSlice';
import Card from '../components/productCart';
import { useEffect } from 'react';

export default function WishlistPage() {
  const saves = useSelector((store) => store.saves);
  const dispatch = useDispatch();
  console.log(saves.savedItems);
  console.log(saves.amount);
  useEffect(() => {
    dispatch(saveAmount());
  }, [saves,dispatch]);

  return (
    <div className="text-center max-h-full min-h-screen ">
      <h2 className="font-bold text-2xl mb-6 text-teal-800">Wishlist</h2>
      {/* <h2>{saves.amount}</h2> */}
      <div className="flex flex-wrap gap-4 justify-center items-center content-center">
        {saves.savedItems.map((item) => {
          return (
            <Card
            key={item.id}
              category={`products/${item.category}`}
              id={item.id}
              img={item.images[0]}
              title={item.title}
              description={item.description}
              price={item.price}
              rating={item.rating}
            />
          );
        })}
      </div>
    </div>
  );
}
