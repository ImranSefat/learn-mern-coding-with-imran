import { FunctionComponent } from "react";
import CourseItem from "./CourseItem";

interface CourseAreaProps {}

const CourseArea: FunctionComponent<CourseAreaProps> = () => {
  return (
    <div className="mx-auto container py-24">
      <h1 className="text-2xl font-medium">Course Lists</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-12">
        <CourseItem
          title="Introduction to Psychology"
          description="Explore the fundamental concepts and theories of psychology, including the study of human behavior, cognition, and emotions. Gain insights into various psychological perspectives and their applications in real-life situations."
          numberOfSections={12}
        />
      </div>
    </div>
  );
};

export default CourseArea;
