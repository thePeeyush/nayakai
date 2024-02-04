import ContactCard from "@/components/ContactCard";
import Searchbox from "@/components/Searchbox";
import {VscSettings} from "react-icons/vsc"

export default function Page() {
  return (
    <div className="p-4 lg:px-16 overflow-y-scroll w-full mt-16">
      <div className="flex items-center gap-2">
      <Searchbox text={"Lawyers"}/>
      </div>
      <div className="w-full flex flex-wrap gap-2 lg:gap-6 mb-20">
     <ContactCard/>
     <ContactCard/>
     <ContactCard/>
     <ContactCard/>
     <ContactCard/>
     <ContactCard/>
     <ContactCard/>
     <ContactCard/>
     <ContactCard/>
     <ContactCard/>
     <ContactCard/>
     <ContactCard/>
     <ContactCard/>
     <ContactCard/>
     <ContactCard/>
     <ContactCard/>
     <ContactCard/>
     <ContactCard/>
     <ContactCard/>
    </div>
    </div>
  );
}