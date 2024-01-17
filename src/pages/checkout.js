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
import OrderRegistration from '@/components/order';
import remove from '../../public/remove.svg';
import add from '../../public/add-new.svg';
import bin from '../../public/delete.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cart,dispatch]);

  return (
    <div className=" lg:h-[85vh] p-4">
      <h2 className="font-bold text-2xl text-teal-800 text-center mb-3">
        CHECKOUT
      </h2>
      <div className=" flex flex-col lg:flex-row gap-6 justify-center ">
        <div className="">
          {cart.cartItems.map((item) => {
            return (
              <div key={item.id} className=" border-2 m-2 p-2 w-96  ">
                <Link href={`/${item.id}`}>
                  <p className="font-bold hover:text-teal-800">{item.title}</p>
                </Link>
                <p>{item.price} $</p>
                <p>amount: {item.amount}</p>
                <div className="flex">
                  <div
                    onClick={() => {
                      dispatch(removeItem(item.id));
                    }}
                    className="bg-teal-600 cursor-pointer   p-2 m-2 text-white rounded "
                  >
                    <Image alt="img" width={40} height={40} src={bin}></Image>
                  </div>
                  <div
                    onClick={() => {
                      dispatch(increase(item.id));
                    }}
                    className="  p-2 m-2 cursor-pointer  text-white rounded "
                  >
                    <Image alt="img" width={40} height={40} src={add}></Image>
                  </div>
                  <div
                    onClick={() => {
                      if (item.amount > 1) {
                        dispatch(decrease(item.id));
                      }
                    }}
                    className="  p-2 m-2 cursor-pointer  text-white rounded"
                  >
                    <Image
                      alt="img"
                      width={40}
                      height={40}
                      src={remove}
                    ></Image>
                  </div>
                </div>
              </div>
            );
          })}

          <button
            onClick={() => {
              dispatch(clearCart());
            }}
            className=" bg-teal-800 p-2 m-2 text-white rounded"
          >
            CLEAR
          </button>
        </div>

        <div>
          <div className="mb-5 mt-2 border-2 border-teal-800 text-center p-2">
            <p>items in your bag : {cart.amount}</p>
            <p className="font-bold  text-xl"> TOTAL : {cart.total} $</p>
          </div>
          <OrderRegistration />
        </div>
      </div>
    </div>
  );
}
