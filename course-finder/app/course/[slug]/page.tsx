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

async function getCourseDetails(id: string) {
  const data = await fetch(`http://localhost:3005/courses/${id}`, {
    cache: "no-cache",
  });
  return await data.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const courseDetails: CourseDataModel = await getCourseDetails(params.slug);

  return (
    <div className="font-mono container mx-32 mt-24 flex flex-col gap-4">
      <h1 className="text-5xl font-bold">{courseDetails.name}</h1>
      {/* <p className="">{Date.parse(courseDetails.createdAt)}</p> */}
      <h6 className="text-2xl ">{courseDetails.course_id}</h6>
      <h6 className="text-lg ">{courseDetails.description}</h6>
      <h6 className="text-md ">
        Number of Sections: {courseDetails.number_of_sections}
      </h6>
    </div>
  );
}
