import axios from 'axios';
import { headers } from 'next/dist/client/components/headers';
import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '@/redux/cart/cartSlice';

export default function OrderRegistration() {
  const card = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const username = useRef();
  const email = useRef();
  const address = useRef();

  function submitOrder(e) {
    e.preventDefault();
    const nameInfo = username.current.value;
    const emailInfo = email.current.value;
    const addressInfo = address.current.value;
    const orderInfo = card.cartItems.map((p) => {
      return {
        productId: p.id,
        amount: p.amount,
      };
    });

    const res = axios
      .post(
        '/api/order',
        { data: { nameInfo, emailInfo, addressInfo, orderInfo } },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => response.data);
dispatch(clearCart())
window.location.reload();
  
  }

  return (
    <form>
      <div className="flex flex-col gap-4">
        <input className=' bg-slate-200 p-2 rounded  w-96 outline-none' required ref={username} type="text" placeholder="name"></input>
        <input className=' bg-slate-200 p-2 rounded  w-96 outline-none' required ref={email} type="text" placeholder="email"></input>
        <input className=' bg-slate-200 p-2 rounded  w-96 outline-none' required ref={address} type="text" placeholder="adress"></input>

        <button
          className="font-mono font-bold rounded-full bg-black p-2   hover:bg-teal-800 text-white active:border-2 active:border-black"
          onClick={submitOrder}
        >
          Submit Order
        </button>
      </div>
    </form>
  );
}
