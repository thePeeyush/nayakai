
import { CiTimer } from "react-icons/ci";
import calculateTime from "../utils/calculateTime";

const MiniPostCard = ({ post }) => {
    const { content, date, authorName, authorUserName, authorProfilePic } = post;
    return (
        <div className="flex justify-start w-full py-2 gap-2 bg-amber-100 text-black p-2 rounded-md">
            <img
                className=" min-w-10 w-10 h-10 rounded-full"
                src={authorProfilePic}
                alt="author Image"
            />
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <h1 className=" font-semibold  text-sm md:text-base truncate max-w-32 md:max-w-52" style={{ WebkitLineClamp: 1 }}>
                        {authorName}
                    </h1>
                    <p className=" text-xs md:text-sm opacity-80">@{authorUserName}</p>
                    <div className="flex items-center">
                        <CiTimer className="text-xs md:text-sm opacity-80" />
                        <h1 className=" text-xs md:text-sm opacity-80">{calculateTime(date)}</h1>
                    </div>
                </div>
                <h1 className="text-sm md:text-base line-clamp-2">{content}</h1>
            </div>
        </div>
    );
};

export default MiniPostCard;
