import { useDispatch, useSelector } from 'react-redux';
import { saveAmount } from '@/redux/saved/saveSlice';
import Card from '../components/productCart';
import { useEffect } from 'react';

export default function WishlistPage() {
  const saves = useSelector((store) => store.saves);
  const dispatch = useDispatch()
  console.log(saves.savedItems);
  console.log(saves.amount);
useEffect(() => {
  dispatch(saveAmount());
}, [saves.savedItems]);

  return (
    <div>
      <h2>Wishlist</h2>
      <h2>{saves.amount}</h2>
      {saves.savedItems.map((item) => {
       return <Card
          category={`products/${item.category}`}
          id={item.id}
          img={item.images[0]}
          title={item.title}
          description={item.description}
          price={item.price}
          rating={item.rating}
        />;
      })}
    </div>
  );
}
