import BrandCart from './brandCart';
import reacticon from '../../public/react.svg';
import nodeicon from '../../public/node-js.svg';
import javascripticon from '../../public/javascript.svg';
import htmlicon from '../../public/html.svg';

const Data = [
  { brand: 'react', logo: reacticon },
  { brand: 'react', logo: reacticon },
  { brand: 'react', logo: reacticon },
  { brand: 'react', logo: reacticon },
  { brand: 'react', logo: reacticon },
  { brand: 'react', logo: reacticon },
];

export default function TopBrands() {
  return (
    <div className=" m-10 flex flex-col justify-center align-middle text-center">
      <h2 className='font-bold  text-2xl'>Top Brands</h2>
      <div className='flex flex-wrap gap-3 justify-center'>
        {Data.map((br) => {
          return <BrandCart brand={br.brand} logo={br.logo} />;
        })}
      </div>
    </div>
  );
}
