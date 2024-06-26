const MiniPostCard = ({ post }) => {
    const { content, date, authorName, authorUserName, authorProfilePic } = post;
    return (
        <div className="flex justify-start w-full py-2 gap-2 bg-amber-100 text-black p-2 rounded-md overflow-hidden">
            <img
                className=" sm:min-w-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                src={authorProfilePic}
                alt="author Image"
            />
            <div className="flex flex-col">
                <div className="flex items-center gap-2 flex-wrap">
                    <h1 className=" font-semibold  text-xs md:text-base truncate max-w-32 md:max-w-52" style={{ WebkitLineClamp: 1 }}>
                        {authorName}
                    </h1>
                    <p className=" text-xs text-[10px] md:text-sm opacity-80">@{authorUserName}</p>
                </div>
                <h1 className="text-sm md:text-base line-clamp-2">{content}</h1>
            </div>
        </div>
    );
};

export default MiniPostCard;
