import { addToCart } from '@/redux/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function AddToCartBtn({item, id}) {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  console.log(item);
  useEffect(() => {
  
    dispatch(addToCart(item));
  }, []);

  function add() {}

  return (
    <button
      onClick={add}
      className="font-mono font-bold rounded-full bg-teal-100   hover:bg-cyan-700 hover:text-white active:border-2 active:border-black "
    >
      <h2>Add to card</h2>
    </button>
  );
}
