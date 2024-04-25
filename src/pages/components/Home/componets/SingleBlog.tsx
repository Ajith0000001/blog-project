import { useDispatch } from "react-redux";
import { BlogData, Id } from "../../../lib/types";
import { postScliceActions } from "../../../store/store";
import { Link } from "react-router-dom";

export default function SingleBlog({ id, title, date, desc }: BlogData) {
  const buttonClasses = "text-[1.2rem] cursor-pointer";

  const dispatch = useDispatch();

  function postDelete(id: Id) {
    dispatch(postScliceActions.delete({ id }));
  }

  return (
    <div className="  w-[500px] flex flex-col justify-center  border-black  mx-auto my-8 px-4 py-6 rounded-2xl shadow-xl transition duration-200 hover:scale-105">
      <h2 className="text-[1.5rem] font-bold uppercase">{title}</h2>
      <p className="text-base">{date}</p>
      <p className="w-full ">{desc}</p>

      <div className="flex justify-between mt-4">
        <div className="flex gap-4">
          <button className="">Like</button>
          <button>UnLike</button>
        </div>
        <div className="flex gap-4">
          <Link to={`/edit_blog/${id}`} className={buttonClasses}>
            Edit
          </Link>
          <button className={buttonClasses} onClick={() => postDelete(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
