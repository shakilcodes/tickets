import Image from 'next/image'
import Banner from './Components/Banner/Banner'
import Movies from './Components/Movies/Movies'

export default function Home() {
  return (
    <main className="bg-[#001232]">
      <Banner></Banner>
      <Movies></Movies>
    </main>
  )
}
