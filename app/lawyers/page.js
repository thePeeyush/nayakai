import LawyerCard from "@/components/LawyerCard";
import Searchbox from "@/components/Searchbox";
import getUrl from "@/utils/getUrl";
import generateUniqueId from "@/utils/newid";
import { Suspense } from "react";

async function getLawyers(searchParams) {

  const curUrl = getUrl();
  let url = '';
  if (searchParams.search) {
    url = `${curUrl}/api/lawyers?search=${searchParams.search}`
  } else url = `${curUrl}/api/lawyers/`

  const res = await fetch(url, { cache: "no-store" });
  return res.json();
}

export default function Page({ searchParams }) {

  return (

    <div className="p-4 lg:px-16 mt-16 overflow-y-scroll w-full">
      <Searchbox text={"Lawyers"} />
      <Suspense fallback={<Loading />}>
        <LawyersSection searchParams={searchParams} />
      </Suspense>
    </div>
  )
}

function Loading() {
  return (
    <h1 className="mt-20 ml-40">🌀Loading...</h1>
  )
}

const LawyersSection = async ({ searchParams }) => {
  const Lawyers = await getLawyers(searchParams) || { message: 'Error' };
  if (Lawyers.message === 'Error') {
    return <h1 className="mt-20 ml-40">! Failed to fetch data</h1>
  }

  return (
    <div className="w-full flex flex-wrap gap-2 lg:gap-6 mb-20">
      {Lawyers.result.length < 1 ? <h1 className="text-center lg:text-left lg:pt-20 lg:pl-40 text-red-400 w-full pt-[30vh]">! Not Found</h1> : Lawyers.result.sort((a, b) => b.rating - a.rating).map((lawyer) => {
        return (
          <LawyerCard key={generateUniqueId} information={lawyer} />
        )
      })}
    </div>
  )
}
