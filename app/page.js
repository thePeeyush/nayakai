import MorePosts from "../components/MorePosts";
import InitialPost from "../components/InitialPost";

export default function Home() {
  return (
    <div className="w-full overflow-y-auto lg:-ml-36 pt-20 lg:pt-8 gap-4 overflow-hidden">
      <InitialPost />
      <MorePosts />
    </div>
  );
}
