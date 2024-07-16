import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CourseCard from "../../Components/CourseCard";
import HomeLayout from "../../Layouts/HomeLayout";
import { getAllCourses } from "../../Redux/Slices/CourseSlice";

function CourseList() {
    const dispatch = useDispatch();

    const { courseData } = useSelector((state) => state.course);

    async function loadCouses() {
        await dispatch(getAllCourses());
    }

    useEffect(() => {
        loadCouses();
    }, []);

    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white">
                <h1>
                    Explore the courses made by&nbsp; 
                    <span className="font-bold text-yellow-500">
                        Industry exports
                    </span>
                    <div className="mb-10 flex flex-wrap gap-14">
                        {courseData?.map((element) => {
                            return <CourseCard key={element._id} data={element} />
                        })}
                    </div>
                </h1>
            </div>
        </HomeLayout>
    );
}

export default CourseList;