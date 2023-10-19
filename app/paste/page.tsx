"use client";
import RichTextField from "@/components/RichTextField";
import CodeTextField from "@/components/CodeTextField";
import { useState } from "react";
import dynamic from "next/dynamic";
// import RichTextField2 from "@/components/RichTextField2";
const RichTextField2 = dynamic(() => import("@/components/RichTextField2"), {
  ssr: false,
});

export default function Home() {
  const [richOrCode, setRichOrCode] = useState("Rich");
  const setField = () => {
    if (richOrCode === "Rich") setRichOrCode("Code");
    else setRichOrCode("Rich");
  };
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 px-24 py-5">
      {/* <div className="flex flex-col justify-center items-center">
        <input
          type="checkbox"
          className="toggle toggle-accent"
          onChange={setField}
        />
        <p className="font-bold font-mono text-xl mt-2 text-accent">
          {richOrCode} Field
        </p>
      </div> */}
      <div className="dropdown dropdown-left dropdown-end ">
        <label
          tabIndex={0}
          className="btn btn-square bg-neutral-focus px-8 text-base w-max m-1 flex"
        >
          {richOrCode}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <button
              className="py-2 border-b-0"
              onClick={(_e) => {
                if (richOrCode != "Rich") {
                  setField();
                }
              }}
            >
              Rich Editor
            </button>
          </li>
          <li>
            <button
              className="py-2 border-b-0"
              onClick={(_e) => {
                if (richOrCode != "Code") {
                  setField();
                }
              }}
            >
              Code Editor
            </button>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        {richOrCode == "Rich" ? <RichTextField2 /> : <CodeTextField />}
      </div>
    </main>
  );
}
