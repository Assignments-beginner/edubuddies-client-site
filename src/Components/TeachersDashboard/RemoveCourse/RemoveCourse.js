import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { updateAlert } from "../../../Utility/Utility";

const RemoveCourse = () => {
	const { user } = useAuth();
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		const url = `https://fierce-caverns-90976.herokuapp.com/getCourse/${user?.email}`;
		axios.get(url).then((res) => {
			const data = res.data.filter((item) => item.courseStatus !== "delete");
			setCourses(data);
		});
	}, [courses, user?.email]);

	return (
		<div className='container mx-auto mt-4 px-4 md:px-11  '>
			<h1 className='text-center text-3xl uppercase font-semibold md:mb-9 mb-5 text-red-500'>
				Romove Your Course From List
			</h1>
			<div className='mx-auto grid grid-cols-12 gap-9'>
				{courses &&
					courses?.map((item, key) => (
						<div className='md:col-span-4 col-span-12' key={key}>
							<div
								className='border rounded-lg card mx-auto duration-300 bg-white'
								style={{ maxWidth: "400px" }}>
								<div className='overflow-hidden teacher-container relative'>
									<img
										className='object-fill h-52 w-full card-image rounded-t-lg'
										src={item?.image}
										alt={item?.title}
									/>
									<div className='overlay absolute bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-[#0000005c] rounded-md'>
										<button
											onClick={() => updateAlert(item._id, "delete", "courses")}
											key={key}
											to={`/teachersDashboard/singleTeacher/${item?._id}`}
											className='absolute left-1/2 top-1/2 text-center -translate-x-1/2 -translate-y-1/2 font-lg text-white bg-red-600 py-2 px-4 rounded-md'>
											Remove Course
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default RemoveCourse;
