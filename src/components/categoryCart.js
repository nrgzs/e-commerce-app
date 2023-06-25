import Link from "next/link";

export default function CategoryCart ({category}){
    return (
        <Link href={`/products/${category}`}>
      <div className="rounded-md text-center w-56  text-white  bg-teal-700 p-5 w-32 hover:bg-teal-600 font-bold shadow-md">
 {category}
      </div>
      </Link>
    );
}