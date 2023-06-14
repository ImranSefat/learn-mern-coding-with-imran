// import { useState } from "react";
import ApiResponse from "./components/ApiResponse";

export default function App() {
  // const [number, setnumber] = useState(0);
  return (
    <div className="py-12 flex justify-center items-center bg-slate-800 text-slate-50">
      <div className="flex flex-col items-center gap-12">
        <ApiResponse />
      </div>
    </div>
  );
}
