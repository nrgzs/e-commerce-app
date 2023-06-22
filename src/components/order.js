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
    console.log(res);
  }

  return (
    <div>
      <form>
        <input ref={username} type="text" placeholder="name"></input>
        <input ref={email} type="text" placeholder="email"></input>
        <input ref={address} type="text" placeholder="adress"></input>

        <button onClick={submitOrder}>Submit Order</button>
      </form>
    </div>
  );
}
