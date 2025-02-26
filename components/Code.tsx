"use client";
import { highlight } from "sugar-high";

export function Code({children}: {children: React.ReactNode}) {
    // async function handleClick() {
    //     await navigator.clipboard.writeText(String(children));
    //     return;
    // }
const codeHTML = highlight(String(children));
  return (
    <div className="relative mx-auto m-4">
      <div className="bg-slate-50 dark:bg-slate-900 text-black dark:text-white p-4 rounded-md">
      {/* <div className="flex justify-between items-center mb-2">
        <span className="text-gray-400 dark:text-gray-300">Code:</span>
         <button className="code bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-gray-500 dark:text-gray-300 px-3 py-1 rounded-xl" onClick={handleClick} data-clipboard-target="#code">
      Copy
      </button>
      </div> */}
      <div className="overflow-x-auto">
        <code dangerouslySetInnerHTML={{ __html: codeHTML }}></code>
      </div>
    </div>
    </div>
  );
}