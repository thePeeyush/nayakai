import LawyerCard from "@/components/LawyerCard";
import Searchbox from "@/components/Searchbox";

export default function Page() {
  return (
    <div className="p-4 lg:px-16 overflow-y-scroll w-full">
      <Searchbox text={"Lawyers"}/>
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