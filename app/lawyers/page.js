import LawyerCard from "@/components/LawyerCard";
import Searchbox from "@/components/Searchbox";
import {VscSettings} from "react-icons/vsc"

export default function Page() {
  return (
    <div className="p-4 lg:px-16 overflow-y-scroll w-full">
      <div className="flex items-center gap-2">
      <Searchbox text={"Lawyers"}/>
      <VscSettings className="text-2xl cursor-pointer hover:text-gray-700"/>
      </div>
      <div className="w-full flex flex-wrap gap-2 lg:gap-6 mb-20">
     <LawyerCard/>
     <LawyerCard/>
     <LawyerCard/>
     <LawyerCard/>
     <LawyerCard/>
     <LawyerCard/>
     <LawyerCard/>
     <LawyerCard/>
     <LawyerCard/>
     <LawyerCard/>
     <LawyerCard/>
     <LawyerCard/>
     <LawyerCard/>
     <LawyerCard/>
     <LawyerCard/>
     <LawyerCard/>
     <LawyerCard/>
     <LawyerCard/>
     <LawyerCard/>
    </div>
    </div>
  );
}