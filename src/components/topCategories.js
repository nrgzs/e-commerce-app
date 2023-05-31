import CategorieCart from "./categorieCart"

const categories=['bag', 'electronic', 'clothing', 'headphones', 'accessories', 'planes']

export default function TopCategories(){
    
    return (
      <div className=" flex flex-col  justify-center content-center text-center font-bold my-4 mx-auto">
        <h2 className=" text-2xl">Top Categories</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            return <CategorieCart categorie={cat} />;
          })}
        </div>
      </div>
    );
}