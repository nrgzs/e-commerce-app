
import Bestsellers from '@/components/bestSellers'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import TopBrands from '@/components/topBrands'
import TopCategories from '@/components/topCategories'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Bestsellers/>
      <TopCategories/>
      <TopBrands/>
      <Footer/>
    </>
  )
}
