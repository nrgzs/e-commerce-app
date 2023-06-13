import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  removeItem,
  addAmount,
  increase,
  decrease,
  calculateTotal,
} from '@/redux/cart/cartSlice';
import { useEffect } from 'react';

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  useEffect(() => {
  
    dispatch(calculateTotal());
  }, [cart]);

 

  

  return (
    <div>
      <h2>Your Bag</h2>
       <p>items in your bag : {cart.amount}</p>
      <p> TOTAL : {cart.total}</p> 
      <div>
        {cart.cartItems.map((item) => {
          return (
            <div key={item.id}>
              {' '}
              <button onClick={() => dispatch(addAmount())}>add amount</button>
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>amount: {item.amount}</p>
              <button
                onClick={() => {
                  dispatch(removeItem(item.id));
                }}
                className=" bg-orange-400 p-2 m-2"
              >
                REMOVE
              </button>
              <button
                onClick={() => {
                  dispatch(increase(item.id));
                }}
                className=" bg-orange-400 p-2 m-2"
              >
                INCREASE
              </button>
              <button
                onClick={() => {
                  if (item.amount > 1) {
                    dispatch(decrease(item.id));
                  }
                }}
                className=" bg-orange-400 p-2 m-2"
              >
                DECREASE
              </button>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          dispatch(clearCart());
        }}
        className=" bg-orange-400 p-2 m-2"
      >
        CLEAR
      </button>
    </div>
  );
}

