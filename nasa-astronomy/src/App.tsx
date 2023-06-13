// import { useState } from "react";
import ApiResponse from "./components/ApiResponse";

export default function App() {
  // const [number, setnumber] = useState(0);
  return (
    <div className="h-screen flex justify-center items-center bg-slate-800 text-slate-50">
      <div className="flex flex-col items-center gap-12">
        {/* <img src="/images/sample4.png" alt="" className="max-w-lg" />
        <h1 className="text-5xl">Welcome to the first day of the workshop!</h1>

        <div className="flex flex-col gap-5">
          <p className="text-xl">Count value is : {number}</p>
          <button
            className="bg-blue-500 px-16 py-4 text-2xl rounded-xl hover:bg-blue-600 duration-300 hover:scale-105"
            onClick={() => setnumber(number + 1)}
          >
            +
          </button>
        </div> */}

        <ApiResponse />
      </div>
    </div>
  );
}
