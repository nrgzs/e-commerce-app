import Image from 'next/image';
import thumbsup from '../../public/thumbs-up.svg';
import save from '../../public/save.svg';
import AddToCartBtn from './addToCartBtn';
import SaveBtn from './saveBtn';
import Link from 'next/link';
export default function Card({category, id, img, title, price, description, rating }) {
  
  return (
    <>
      <div className=" flex flex-col relative gap-1 p-3 w-48  border-2 border-gray-300 rounded-md">
        <Link href={`/${id}`}>
          <div className=" w-40 h-40 overflow-clip">
            <Image src={img} alt="product img" width={480} height={340}></Image>
          </div>
        
            <SaveBtn itemId={id} />
           {/*  <div className="absolute top-2 right-3 bg-white bg-opacity-70 rounded-full p-1 ">
              <Image src={save} alt="save icon"></Image>
            </div> */}
         
          <div className="mt-2 w-35 h-40 flex flex-col ">
            <div className="">
              <h2 className="mr-auto font-mono font-bold  w-32 h-20">
                {title.slice(0, 25)}...
              </h2>

              <p className="text-sm">{description.slice(0, 20)}...</p>
            </div>
            <div className="flex flex-col justify-end align-bottom">
              <p className="">{price}$</p>
              <div className="flex gap-3 ">
                <Image src={thumbsup} alt="rate icon" className="w-5"></Image>
                <p>({rating})</p>
              </div>
            </div>
          </div>
          </Link>
          <AddToCartBtn id={id} />
        
      </div>
    </>
  );
}
