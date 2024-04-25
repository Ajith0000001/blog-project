import { useAppSelector } from "../../../store/store";
import SingleBlog from "./SingleBlog";

export default function Blog() {
  const postSliceData = useAppSelector((state) => state.postSlice.items);

  console.log("hello");

  return (
    <div>
      {postSliceData.length === 0 && (
        <div className="flex justify-center mt-[8rem] ">
          <p className="text-[2rem]">Empty Blog!</p>
        </div>
      )}

      {postSliceData.map((item) => (
        <SingleBlog key={item.id} {...item} />
      ))}
    </div>
  );
}
