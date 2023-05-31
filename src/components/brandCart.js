import Image from "next/image";

export default function BrandCart({brand, logo}){
return (
  <div className="flex gap-3 b bg-slate-300 w-32 rounded-md p-3 justify-center hover:bg-red-400">
    <Image src={logo}></Image>
    <h2 className=" font-bold">{brand}</h2>
  </div>
);
}