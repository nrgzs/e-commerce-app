import Image from 'next/image';
import thumbsup from '../../public/thumbs-up.svg';
import save from '../../public/save.svg';
export default function Card({ img, title, price, description, rating }) {
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

            <p className="text-sm">{description}</p>
          </div>
          <div className="flex flex-col justify-end align-bottom">
            <p className="">{price}$</p>
            <div className="flex gap-3 ">
              <Image src={thumbsup} alt="rate icon" className="w-5"></Image>
              <p>({rating})</p>
            </div>
          </div>
        </div>

        <button className="font-mono font-bold rounded-full bg-teal-100  p-2 hover:bg-cyan-700 hover:text-white active:border-2 active:border-black ">
          <h2>Add to card</h2>
        </button>
      </div>
    </>
  );
}
