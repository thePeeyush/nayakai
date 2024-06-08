import { CiChat1, CiShare1, CiTimer } from "react-icons/ci";
import { PiTriangleThin } from "react-icons/pi";
import { PiLineSegmentsThin } from "react-icons/pi";
import VedioPlayer from "./VedioPlayer";

export default function Card({post}) {
  const {content,media,likes,dislikes,comments,views,date} = post;

const calculateTime = (date) => {
  const time = new Date().getTime() - new Date(date).getTime();
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

  if (days > 0) {
    return `${days}d`;
  } else if (hours > 0) {
    return `${hours}h`;
  } else {
    return `${minutes}m`;
  }
}

  return (
    <div className="flex flex-col w-full max-w-lg items-center border border-t-0 mx-auto">
      <div className="flex justify-start items-center w-full p-2">
        <img
          className="w-8 h-8 rounded-full"
          src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
          alt="Tailwind CSS Illustration"
        />
        <h1 className="px-3 font-semibold">Peeyush</h1>
        <CiTimer />
        <h1 className=" text-sm opacity-80 px-1">{calculateTime(date)} ago</h1>
      </div>
      <h1 className="w-full px-4 pb-1" >
       {content}
      </h1>
      <div className="outline-dashed outline-1 outline-gray-100 carousel carousel-center mx-4 rounded-md max-h-[500px] relative">
        {media.map((item, index) => {
          return (
            <div key={index} className="carousel-item w-full relative">
              {item.filetype.includes('image') && <img className="w-full object-cover" src={item.url} alt="image" />}
              {item.filetype.includes('video') && <VedioPlayer url={item.url} />}
            <p className="absolute bottom-5 right-5 bg-black bg-opacity-40 text-white px-2 py-1 rounded text-xs">{index + 1} / {media.length}</p>
            </div>
          )
        })}
      </div>
      <div className="flex w-full justify-around text-sm text-gray-500">
        <Btn color={'hover:text-green-500'} bgColor={'hover:bg-green-500'} title={likes}><PiTriangleThin /> </Btn>
        <Btn color={'hover:text-red-500'} bgColor={'hover:bg-red-500'} title={dislikes}><PiTriangleThin className="rotate-180" /> </Btn>
        <Btn color={'hover:text-blue-500'} bgColor={'hover:bg-blue-500'} title={comments.length}><CiChat1 /> </Btn>
        <Btn color={'hover:text-yellow-500'} bgColor={'hover:bg-yellow-500'} title={views}><PiLineSegmentsThin /> </Btn>
        <Btn color={'hover:text-pink-500'} bgColor={'hover:bg-pink-500'} title=""><CiShare1 /></Btn>
      </div>  
    </div>
  );
}

const Btn = ({ children, title, color, bgColor }) => {
  return <button className={`flex justify-center items-center gap-1 m-2 rounded-full p-2 w-full ${color} ${bgColor} hover:bg-opacity-10`}>
    <div className="text-xl">
      {children}
    </div>
    <h1 className="text-[12px]">{title}</h1>
  </button>
}