import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let inter = setTimeout(() => {
      setCount(count + 1);
    }, 100);
    if (count == 100) {
      clearTimeout(inter);
    }
  }, [count]);

  return (
    <>
      <p className="mx-auto w-[80%] md:w-[50%] text-center my-4 font-bold text-xl">
        Progress Bar
      </p>
      <div className="w-[80%] md:w-[50%] overflow-hidden text-center mx-auto h-8 bg-gray-300 border border-gray-500 rounded-full relative">
        <section
          style={{ width: `${count}%` }}
          className={` h-8 bg-[#00c251]  rounded-full flex items-center justify-center`}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={count}
        ></section>
        <p
          className={`absolute top-1 mx-auto w-full font-semibold ${
            count < 49 ? "text-black" : "text-white"
          }`}
        >
          {count}%
        </p>
      </div>
    </>
  );
}

export default App;
