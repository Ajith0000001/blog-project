import React, { ChangeEvent, useState } from "react";
import Input from "../../../lib/components/Input";
import TextArea from "../../../lib/components/TextArea";
import { postScliceActions, useAppSelector } from "../../../store/store";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BlogData } from "../../../lib/types";

export default function EditBlog() {
  const postSliceData = useAppSelector((state) => state.postSlice.items);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const findData = postSliceData.find((item) => item.id === params.id);

  const [input, setInput] = useState<BlogData>({
    id: findData?.id,
    title: findData?.title,
    date: findData?.date,
    desc: findData?.desc,
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(postScliceActions.update(input));
    navigate("/");
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ) {
    const { value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      <p> {findData?.desc}</p>
      <div className="flex flex-col w-[600px] mx-auto mt-[6rem] gap-4 justify-center items-center">
        <form onSubmit={handleSubmit}>
          <Input
            heading="Title"
            type="text"
            name="title"
            value={input.title || ""}
            handleChange={handleChange}
          />
          <Input
            heading="Date"
            type="date"
            name="date"
            value={input.date || ""}
            handleChange={handleChange}
          />
          <TextArea
            heading="Description"
            name="desc"
            value={input.desc || ""}
            handleChange={handleChange}
          />
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-gray-900 px-2 py-2 rounded-xl text-[white]"
            >
              Submit from edit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
