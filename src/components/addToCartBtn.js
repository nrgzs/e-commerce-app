import { addToCart, calculateTotal } from '@/redux/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

export default function AddToCartBtn({  id }) {
  
  const dispatch = useDispatch();

  function add (){
    axios.post('/api/cart', { productId: id }).then((response) => {
      dispatch(addToCart(response.data));
    });}


  return (
    <button
      onClick={add}
      className="font-mono font-bold rounded-full bg-black p-2   hover:bg-teal-800 text-white active:border-2 active:border-black "
    >
      Add to card
    </button>
  );
}
