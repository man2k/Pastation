"use client";
import { useEffect, useRef, useState } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import languages from "../public/assets/languages.json";
import shortid from "shortid";
import Loading from "./Loading";

// import { stringify } from "flatted";
// import axios from "axios";
// import CryptoJS from "crypto-js";

import { v4 as uuidv4 } from "uuid";

// import type { LineNumbersType } from "monaco-editor/esm/vs/editor/editor.api";
type Props = {};

const CodeTextField = (props: Props) => {
  const [language, setLanguage] = useState("javascript");
  const [lineNumbers, setlineNumbers] = useState<any>("on");
  const [minimap, setMinimap] = useState(false);

  const paste = useRef<any>(null);

  const handleLineNumbers = () => {
    if (lineNumbers === "on") {
      setlineNumbers("off");
    } else {
      setlineNumbers("on");
    }
  };

  const handleInputChange = (e: object) => {
    paste.current = e;
    // console.log(paste.current.getvalue());
  };

  const toggleMinimap = () => {
    // console.log("minimap toggle");
    setMinimap(!minimap);
  };

  const handlePaste = async () => {
    console.log(paste.current.getValue());
    const content: string = paste.current.getValue();
    if (content === "") return;
    // const uuid = uuidv4();
    // const id = shortid.generate();
  };

  // const showValue = () => {
  //   console.log(paste.current.getValue());

  // };

  return (
    <div className="flex-col w-full text-center">
      <div className="flex border-[1.5px] py-0.5 border-white mb-2 bg-stone-900 gap-5 rounded-xl rounded-b-none font-semibold">
        <select
          name={language}
          id="Language"
          onChange={(e) => {
            //   console.log(e.target.value);
            setLanguage(e.target.value);
          }}
          className="flex text-white text-center font-mono text-sm focus:bg-black bg-transparent rounded-l-xl rounded-bl-none"
        >
          {languages.map((e, key) => {
            return (
              <option value={e.value} key={key} className="m-0 w-auto">
                {e.name}
              </option>
            );
          })}
        </select>
        <div className="flex-col text-center font-mono text-sm">
          <label className="p-3 text-white">Minimap</label>
          <br />
          <input
            type="checkbox"
            className="rounded-2xl"
            onChange={toggleMinimap}
          />
        </div>
        <div className="flex-col text-center font-mono text-sm">
          <label className="text-white">Line Numbers</label>
          <br />
          <input type="checkbox" defaultChecked onChange={handleLineNumbers} />
        </div>
        {/* <div className="flex-col text-center font-mono text-white">
          <label className="p-3">Find</label>
          <br />
          <label className="bg-black">Ctrl+F</label>
        </div> */}
      </div>
      <Editor
        className="min-h-[50vh] w-full border-[1px] border-white border-t-[0.3px]"
        defaultLanguage="plaintext"
        language={language}
        defaultValue=""
        theme="vs-dark"
        loading={<Loading />}
        onMount={handleInputChange}
        options={{
          readOnly: false,
          wordWrap: "on",
          wrappingIndent: "none",
          autoIndent: "advanced",
          fontFamily: "Inconsolata, Consolas, 'Courier New', monospace",
          fontSize: 17,
          minimap: {
            enabled: minimap,
          },
          lineNumbers: lineNumbers,
          lineDecorationsWidth: 10,
          glyphMargin: false,
          roundedSelection: true,
          occurrencesHighlight: true,
          folding: true,
          renderWhitespace: "selection",
          scrollBeyondLastLine: false,
          smoothScrolling: true,
          links: true,
          codeLens: true,
          scrollbar: {
            vertical: "auto",
            horizontal: "auto",
          },
        }}
      />
      <div>
        <button
          className="bg-gray-600 h-9 rounded-sm w-32 mt-4 text-base transition ease-in-out hover:font-bold border-b-[1px] border-white shadow-lg shadow-black"
          onClick={handlePaste}
        >
          PASTE
        </button>
      </div>
    </div>
  );
};

export default CodeTextField;
