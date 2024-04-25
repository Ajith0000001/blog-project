import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex justify-around pt-4">
      <h1 className="text-[2rem]">BlogPost</h1>

      <Link
        to="blog_post"
        className="bg-gray-900 text-white text-[1.2rem] px-2 py-2 rounded-xl transition duration-200 hover:scale-105"
      >
        New Post
      </Link>
    </div>
  );
}
