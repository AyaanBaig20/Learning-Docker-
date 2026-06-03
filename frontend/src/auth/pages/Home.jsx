import React from "react";
import { Editor } from "@monaco-editor/react";

const Home = () => {
  return (
    <main className="h-screen w-full bg-[#0f172a] p-4">
      <div className="h-full flex gap-4">
        <aside className="w-72 bg-[#111827] border border-gray-800 rounded-2xl p-5 flex flex-col"></aside>

        <section className="flex-1 bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden flex flex-col">
          <div className="h-14 px-5 border-b border-gray-800 flex items-center justify-between">
            <div>
              <h2 className="text-white font-medium">app.js</h2>
            </div>

            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer">
              Run Code
            </button>
          </div>

          {/* Monaco Editor */}
          <div className="flex-1">
            <Editor
              height="100%"
              defaultLanguage="javascript"
              defaultValue={`// Write your code here
console.log("Hello World");`}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 15,
                fontFamily: "Fira Code, monospace",
                scrollBeyondLastLine: false,
                automaticLayout: true,
              }}
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
