"use client";
import "react-quill/dist/quill.snow.css";
import "../app/globals.css";
import EditorToolbar, { modules, formats } from "./EditorToolbar";

import { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const RichTextField2 = () => {
  const [value, setValue] = useState("");
  const handleValue = (e: string) => {
    console.log(e);
    setValue(e);
  };
  return (
    <div className="flex flex-col">
      <div className="text-editor">
        <EditorToolbar />
        <ReactQuill
          className="text-xl"
          theme="snow"
          value={value}
          onChange={handleValue}
          placeholder={"Write something awesome..."}
          modules={modules}
          formats={formats}
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-gray-600 h-9 rounded-sm w-32 mt-4 text-base transition ease-in-out hover:font-bold border-b-[1px] border-white shadow-lg shadow-black"
          // onClick={handleSubmit}
        >
          PASTE
        </button>
      </div>
    </div>
  );
};

export default RichTextField2;
