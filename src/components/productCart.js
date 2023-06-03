import Image from 'next/image';
import thumbsup from '../../public/thumbs-up.svg';
import save from '../../public/save.svg';
import AddToCartBtn from './addToCartBtn';
export default function Card({ id, img, title, price, description, rating }) {
  return (
    <>
      <div className=" flex flex-col relative gap-1 p-2 w-48 h-96 border-2 border-gray-300 rounded-md">
        <div>
          <Image src={img} alt="product img" width={180} height={250}></Image>
          <div className="absolute top-2 right-3 bg-white bg-opacity-70 rounded-full p-1 ">
            <Image src={save} alt="star icon"></Image>
          </div>
        </div>
        <div className="w-35 h-28 flex flex-col">
          <div className="">
            <h2 className="mr-auto font-mono font-bold">{title}</h2>

            <p className="text-sm">{description.slice(0, 25)}...</p>
          </div>
          <div className="flex flex-col justify-end align-bottom">
            <p className="">{price}$</p>
            <div className="flex gap-3 ">
              <Image src={thumbsup} alt="rate icon" className="w-5"></Image>
              <p>({rating})</p>
            </div>
          </div>
        </div>

        <AddToCartBtn />
      </div>
    </>
  );
}
