import Image from "next/image";
import Link from "next/link";
export default function BrandCart({brand, logo}){
return (
  <Link href={`/products/${brand}`}>
    <div className="flex gap-3 b bg-slate-300 w-32 rounded-md p-3 justify-center hover:bg-red-400">
      {/* <Image src={logo} alt="logo"></Image> */}
      <h2 className=" font-bold">{brand}</h2>
    </div>
  </Link>
);
}