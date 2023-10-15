"use client";

import React, { useState } from "react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import dynamic from "next/dynamic";
import plugins from "suneditor/src/plugins";
import axios from "axios";
import CryptoJS from "crypto-js";
import shortid from "shortid";
import { stringify } from "flatted";
import { useRouter } from "next/navigation";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const RichTextField = ({ gotContent, pasteID, submit }) => {
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    // e.preventDefault();
    if (content === "") {
      return;
    }
    const id = shortid.generate();
    // console.log(id);
    const encMsg = stringify(CryptoJS.AES.encrypt(content, id));
    // console.log(encMsg);
    // const decMsg = CryptoJS.AES.decrypt(parse(gotContent), pasteID);
    // console.log(decMsg);
    // const encMsg2 = parse(encMsg);
    // const decMsg = CryptoJS.AES.decrypt(encMsg2, id);
    // console.log(decMsg);
    // console.log(parse(encMsg).toString());
    // console.log(decMsg.toString(CryptoJS.enc.Utf8));
    axios
      .post("api/pastes", {
        id: id,
        paste: encMsg,
        timestamp: `${new Date().getTime()}`,
        author: "anon",
      })
      .then(function () {
        // console.log(response);
        // window.alert("Uploaded");
        router.push(`/${id}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center w-full p-10 border-2 border-white">
      {submit != false ? (
        <div className="w-full h-full border-2 border-white">
          <SunEditor
            defaultValue=""
            setContents={content}
            onChange={(e) => {
              // console.log(e);
              setContent(e);
            }}
            lang="en"
            height="auto"
            width="auto"
            placeholder="PASTIT HERE..."
            plugins={Object.keys(plugins)}
            setOptions={{
              code: "en",
              mode: "balloon-always",
              buttonList: [
                // Default
                ["undo", "redo"],
                ["font", "fontSize", "formatBlock"],
                ["paragraphStyle", "blockquote"],
                [
                  "bold",
                  "underline",
                  "italic",
                  "strike",
                  "subscript",
                  "superscript",
                ],
                ["fontColor", "hiliteColor", "textStyle"],
                ["removeFormat"],
                ["align", "horizontalRule", "list", "lineHeight"],
                ["table", "link", "image", "video", "audio"],
                // ["imageGallery"],
                ["showBlocks", "codeView"],
                ["preview", "print"],
                // ["-left", "#fix", "dir_ltr", "dir_rtl"],
                // (min-width:992px)
                [
                  "%992",
                  [
                    ["undo", "redo"],
                    [
                      ":p-More Paragraph-default.more_paragraph",
                      "font",
                      "fontSize",
                      "formatBlock",
                      "paragraphStyle",
                      "blockquote",
                    ],
                    ["bold", "underline", "italic", "strike"],
                    [
                      ":t-More Text-default.more_text",
                      "subscript",
                      "superscript",
                      "fontColor",
                      "hiliteColor",
                      "textStyle",
                    ],
                    ["removeFormat"],
                    ["align", "horizontalRule", "list", "lineHeight"],
                    ["-right", "dir"],
                    [
                      "-right",
                      ":i-More Misc-default.more_vertical",
                      "showBlocks",
                      "codeView",
                      "preview",
                      "print",
                    ],
                    [
                      "-right",
                      ":r-More Rich-default.more_plus",
                      "table",
                      "link",
                      "image",
                      "video",
                      "audio",
                      // "math",
                      // "imageGallery",
                    ],
                  ],
                ],
                // (min-width:768px)
                [
                  "%768",
                  [
                    ["undo", "redo"],
                    [
                      ":p-More Paragraph-default.more_paragraph",
                      "font",
                      "fontSize",
                      "formatBlock",
                      "paragraphStyle",
                      "blockquote",
                    ],
                    [
                      ":t-More Text-default.more_text",
                      "bold",
                      "underline",
                      "italic",
                      "strike",
                      "subscript",
                      "superscript",
                      "fontColor",
                      "hiliteColor",
                      "textStyle",
                      "removeFormat",
                    ],
                    [
                      ":e-More Line-default.more_horizontal",
                      "align",
                      "horizontalRule",
                      "list",
                      "lineHeight",
                    ],
                    [
                      ":r-More Rich-default.more_plus",
                      "table",
                      "link",
                      "image",
                      "video",
                      "audio",
                      // "math",
                      // "imageGallery",
                    ],
                    ["-right", "dir"],
                    [
                      "-right",
                      ":i-More Misc-default.more_vertical",
                      "showBlocks",
                      "codeView",
                      "preview",
                      "print",
                    ],
                  ],
                ],
              ],
              plugins: plugins,
            }}
            setDefaultStyle="font-family: monospace; font-size:16px; background: #1f2937; color: white; border-radius: 6px; min-height: 50vh"
            setAllPlugins={true}
          />
        </div>
      ) : (
        <div className="w-full">
          <SunEditor
            defaultValue=""
            setContents={gotContent}
            placeholder="Loading..."
            setOptions={{
              code: "en",
              mode: "balloon-always",
            }}
            disable
            lang="en"
            height="auto"
            width="auto"
            setDefaultStyle="font-family: monospace; font-size:16px; background: #1f2937; color: white; border-radius: 6px;"
          />
        </div>
      )}

      {submit === false ? (
        <></>
      ) : (
        <div>
          <button
            className="border-1 border-black bg-indigo-400 hover:bg-indigo-600 rounded-lg w-24 mt-3 p-2 transition ease-in-out hover:font-bold font-mono antialiased"
            onClick={handleSubmit}
          >
            Paste
          </button>
        </div>
      )}
    </div>
  );
};
export default RichTextField;
