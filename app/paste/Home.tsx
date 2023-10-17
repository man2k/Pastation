"use client";
import RichTextField from "@/components/RichTextField";
import CodeTextField from "@/components/CodeTextField";
import { useState } from "react";

export default function Home() {
  const [richOrCode, setRichOrCode] = useState("Rich");
  const setField = () => {
    if (richOrCode == "Rich") setRichOrCode("Code");
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
      <div className="dropdown dropdown-right dropdown-end">
        <label tabIndex={0} className="btn m-1">
          {richOrCode}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          onChange={setRichOrCode}
        >
          <li>
            <button>Rich Editor</button>
          </li>
          <li>
            <button>Code Editor</button>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        {richOrCode == "Rich" ? <RichTextField /> : <CodeTextField />}
      </div>
    </main>
  );
}
