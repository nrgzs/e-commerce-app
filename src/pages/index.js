import Bestsellers from '@/components/bestSellers';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import TopBrands from '@/components/topBrands';
import TopCategories from '@/components/topCategories';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ bestsellersTrim, categories }) {
  return (
    <>
      <Hero />
      <Bestsellers data={bestsellersTrim} />
      <TopCategories data={categories} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { products } = await import('../../data/products.json');
  const bestSellers = products.sort((a, b) => {
    if (a.rating < b.rating) {
      return 1;
    } else if (a.rating > b.rating) {
      return -1;
    } else {
      return 0;
    }
  });
  const bestsellersTrim = bestSellers.slice(0, 15);

  const categories = new Set([]);

  products.map((p) => {
    categories.add(p.category);
  });

  return {
    props: {
      bestsellersTrim,
      categories: Array.from(categories).slice(0, 6),
    },
  };
}
