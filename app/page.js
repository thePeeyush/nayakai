import Card from '@/components/cards'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-wrap justify-center w-full overflow-y-auto lg:-ml-36 pt-5 lg:pt-16 track'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <div className='h-32 mb-20 bg-gray-50 w-full flex justify-center items-center'>
      Made with 💖 by Peeyush.
    </div>
    </div>
  )
}
