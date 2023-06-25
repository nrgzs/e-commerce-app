import axios from "axios";

export default function SearchPage({ data,srchTxt }) {
  return (
    <div className="max-h-full min-h-screen p-4">
      <h2 className="font-bold text-2xl text-teal-800">
        Search results for "{srchTxt}"
      </h2>
      <div className="">{data}</div>
    </div>
  );
}

export async function getServerSideProps(context) {
 
 const {srchTxt} = context.query;
const {data} = await axios.get('http://127.0.0.1:3000/api/srch');
 
  return {
    props: {
      data,
      srchTxt
    },
  };
}
