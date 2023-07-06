import { FunctionComponent } from "react";
import CourseItem from "./CourseItem";
import Link from "next/link";

interface CourseAreaProps {}

interface CourseDataModel {
  _id: string;
  name: string;
  course_id: string;
  description: string;
  number_of_sections: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

async function getCourses() {
  const data = await fetch("http://localhost:3005/courses", {
    cache: "no-cache",
  });
  return await data.json();
}

const CourseArea: FunctionComponent<CourseAreaProps> = async () => {
  const courses: [CourseDataModel] = await getCourses();

  return (
    <div className="mx-auto container py-24">
      <h1 className="text-2xl font-medium">Course Lists</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-12">
        {courses.map((course) => (
          <Link href={`/course/${course._id}`} key={course._id}>
            <CourseItem
              key={course._id}
              title={course.name}
              description={course.description}
              numberOfSections={course.number_of_sections}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseArea;
