import axios from "axios";

export default function SearchPage({ data }) {
  return (
    <div>
      <h2>search results</h2>
      <div>{data}</div>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log(context.url);
const {data} = await axios.get('http://127.0.0.1:3000/api/srch');
 
  return {
    props: {
      data,
    },
  };
}
