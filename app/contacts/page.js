import ContactCard from "@/components/ContactCard";
import Searchbox from "@/components/Searchbox";

export default function Page() {
  return (
    <div className="p-4 lg:px-16 overflow-y-scroll w-full">
      <Searchbox text={"Contacts"}/>
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