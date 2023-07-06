import { FunctionComponent } from "react";
import Image from "next/image";
/* eslint-disable react/no-unescaped-entities */

const CTA: FunctionComponent = () => {
  return (
    <>
      {/* <div className="flex flex-col gap-12 items-center ">
        <h1 className="text-5xl">CourseConnect: Discover Your Academic Path</h1>
        <p className="text-center max-w-2xl opacity-70 ">
          Welcome to our University Course Finder application! We're here to
          help you explore and discover the perfect university courses that
          align with your interests and goals.
        </p>
        <Image
          src="./sample_pic.svg"
          width={500}
          height={280}
          alt="Landing banner image"
        />
        <button className="bg-green-500 text-slate-800 p-4 rounded-md font-bold hover:scale-110 duration-200">
          Explore Courses
        </button>
      </div> */}
      <div className="pt-32 flex flex-row gap-30  items-center justify-center">
        <div className="flex flex-col max-w-lg gap-12">
          <h1 className="text-5xl">
            CourseConnect: Discover Your Academic Path
          </h1>
          <p className=" max-w-2xl opacity-70 ">
            Welcome to our University Course Finder application! We're here to
            help you explore and discover the perfect university courses that
            align with your interests and goals.
          </p>
          <button className="bg-green-500 w-48 text-slate-800 p-4 rounded-md font-bold hover:scale-110 duration-200">
            Explore Courses
          </button>
        </div>
        <Image
          src="./sample_pic.svg"
          width={500}
          height={280}
          alt="Landing banner image"
          className="hover:scale-110 duration-200 "
        />
      </div>
    </>
  );
};

export default CTA;
