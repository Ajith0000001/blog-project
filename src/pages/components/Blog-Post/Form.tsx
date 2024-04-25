import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { postScliceActions } from "../../store/store";
import Input from "../../lib/components/Input";
import TextArea from "../../lib/components/TextArea";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export default function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const data: { [key: string]: string } = {}; // Define data object explicitly as string key/value pairs

    for (const [key, value] of fd.entries()) {
      data[key] = String(value); // Convert all values to strings
    }

    const { title, date, desc } = data; // Destructure values from data object

    if (title && date && desc) {
      dispatch(
        postScliceActions.add({
          title,
          date,
          desc,
          id: nanoid(),
        })
      );
    } else {
      window.alert("Provide correct value");
      return;
    }
    navigate("/");
  }

  return (
    <>
      <div className="flex flex-col w-[600px] mx-auto mt-[6rem] gap-4 justify-center items-center">
        <form onSubmit={handleSubmit}>
          {" "}
          <Input heading="Title" type="text" name="title" />
          <Input heading="Date" type="date" name="date" />
          <TextArea heading="Description" name="desc" />
          <div className="flex justify-center mt-4">
            {/* <p>{message}</p> */}
            <button
              type="submit"
              className="bg-gray-900 px-2 py-2 rounded-xl text-[white]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
