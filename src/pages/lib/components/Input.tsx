import { ChangeEvent } from "react";

export default function Input({
  heading,
  type,
  name,
  value,
  handleChange,
}: {
  heading: string;
  type: string;
  name: string;
  value?: string | undefined;
  handleChange?: (e: ChangeEvent<HTMLInputElement>, name: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2 pl-4 pt-6 ">
      <label id={heading} className="text-[1.5rem] ">
        {heading}
      </label>
      <input
        type={type}
        id={heading}
        name={name}
        value={value}
        className="w-[300px] outline-none border-gray-500 border focus:border-blue-500  rounded-md py-1"
        onChange={(e) => handleChange && handleChange(e, name)}
      />
    </div>
  );
}
