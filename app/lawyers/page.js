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

  if (!res.ok) {
    throw new Error(`Failed to fetch data`);
  }
  return res.json();
}

export default async function Page({ searchParams }) {
  const Lawyers = await getLawyers(searchParams);
  return (

    <div className="p-4 lg:px-16 mt-16 overflow-y-scroll w-full">
      <Searchbox text={"Lawyers"} />
      <Suspense fallback={<Loading/>}>
      {Lawyers.message === 'Error' ? <h1>! Failed to fetch data</h1> : (
        <div className="w-full flex flex-wrap gap-2 lg:gap-6 mb-20">
          {Lawyers.result.length < 1 ? <h1 className="text-center lg:text-left lg:pt-20 lg:pl-40 text-red-400 w-full pt-[30vh]">! Not Found</h1> : Lawyers.result.sort((a, b) => b.rating - a.rating).map((lawyer) => {
            return (
              <LawyerCard key={generateUniqueId} information={lawyer} />
            )
          })}
        </div>
      )}
      </Suspense>
    </div>
  )
}

function Loading() {
  return(
    <h1>🌀Loading...</h1>
  )
}
