import Card from '@/components/cards'
import Image from 'next/image'
import getUrl from '../utils/getUrl';
import { Suspense } from 'react';

export default async function Home() {
  const fetchPosts = async () => {
    try {
      const url = `${getUrl()}/api/content`
      const res = await fetch(url, { method: 'GET', cache: 'no-store' });
      const posts = (await res.json()).result
      return posts
    } catch (error) {
      console.log(error)
    }
  }
  const posts = await fetchPosts()
  return (
    <Suspense fallback={<Loading />}>
      <div className='w-full overflow-y-auto lg:-ml-36 pt-20 lg:pt-16 gap-4 md:p-4'>
        {
          posts.map((element, index) => {
            return (
              <Card key={index} post={element} />
            )
          })
        }
        <div className='h-32 bg-gray-50 w-full flex justify-center items-center mb-10 lg:mb-0'>
          Made with 💖 by Peeyush.
        </div>
      </div>
    </Suspense>
  )
}

function Loading() {
  return (
    <h1 className="mt-20 ml-40">🌀Loading...</h1>
  )
}
