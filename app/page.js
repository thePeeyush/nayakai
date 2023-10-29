import Card from '@/components/cards'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-wrap justify-center w-full overflow-y-auto pt-5'>
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
      Made with 💖 by Peeyush and Team.
    </div>
    </div>
  )
}
