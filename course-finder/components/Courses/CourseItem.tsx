import { title } from "process";
import { FunctionComponent } from "react";

interface CourseItemProps {
  title: string;
  description: string;
  numberOfSections: number;
}

const CourseItem: FunctionComponent<CourseItemProps> = ({
  title,
  description,
  numberOfSections,
}) => {
  return (
    <>
      <div className="bg-slate-700 h-max text-white flex flex-col p-8 gap-8 rounded-md hover:scale-110 duration-300 cursor-pointer">
        <h3 className="text-2xl font-bold ">{title}</h3>
        <p>{description}</p>
        <p>Number of Section: {numberOfSections}</p>
      </div>
    </>
  );
};

export default CourseItem;
