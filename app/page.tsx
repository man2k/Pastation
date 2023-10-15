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
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-5">
      <div className="flex flex-col justify-center items-center">
        <input
          type="checkbox"
          className="toggle toggle-info"
          onChange={setField}
        />
        <p className="text-blue-500 font-bold">{richOrCode}</p>
      </div>
      {richOrCode == "Rich" ? <RichTextField /> : <CodeTextField />}
    </main>
  );
}
