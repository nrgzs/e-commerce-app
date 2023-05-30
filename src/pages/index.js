
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
    </>
  )
}
