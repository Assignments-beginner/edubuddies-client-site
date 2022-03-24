import axios from "axios";
import React, { useEffect, useState } from "react";
import { updateAlert } from "../../../Utility/Utility";
import { deleteAlert } from "../../../Utility/Utility";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faRotateLeft,
	faTrash,
	faEye,
} from "@fortawesome/free-solid-svg-icons";

const RecycleBin = () => {
	const [courses, setCourses] = useState([]);
	const [teacher, setTeacher] = useState([]);

	// load courses
	useEffect(() => {
		const url = "https://fierce-caverns-90976.herokuapp.com/courses";
		axios.get(url).then((res) => {
			const data = res.data.filter((item) => item.courseStatus === "delete");
			setCourses(data);
		});
	}, [courses]);

	// load teacher data
	useEffect(() => {
		axios
			.get("https://fierce-caverns-90976.herokuapp.com/teachers")
			.then((res) => {
				const restData = res.data.filter((item) => item.status === "deleted");
				setTeacher(restData);
			});
	}, [teacher]);

	return (
		<div className='container mx-auto px-4 md:px-9'>
			<div>
				<div className='mb-8 mt-4'>
					<h3 className='text-3xl font-semibold text-center text-red-500'>
						Action For Courses
					</h3>
				</div>
				{courses.length > 0 ? (
					<div className='flex flex-col'>
						<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
							<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
								<div className='shadow overflow-hidden border-b border-red-200 sm:rounded-lg tables'>
									<table className='min-w-full divide-y divide-red-200'>
										<thead className='bg-slate-900 font-bold'>
											<tr>
												<th
													scope='col'
													className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
													Title
												</th>
												<th
													scope='col'
													className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
													Category
												</th>
												<th
													scope='col'
													className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
													Fee
												</th>
												<th
													scope='col'
													className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
													Restore
												</th>
												<th
													scope='col'
													className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
													Delete
												</th>
											</tr>
										</thead>
										<tbody className='bg-white divide-y divide-red-300'>
											{courses &&
												courses.map((item, key) => (
													<tr key={key}>
														<td className='px-6 py-3 whitespace-nowrap text-center'>
															{item.title}
														</td>
														<td className='px-6 py-3 whitespace-nowrap text-center'>
															{item.category}
														</td>
														<td className='px-6 py-3 whitespace-nowrap text-center'>
															{item.courseFee} TK
														</td>
														<td
															onClick={() =>
																updateAlert(item._id, "approved", "courses")
															}
															className='px-6 py-3 whitespace-nowrap text-center'>
															<button>
																<FontAwesomeIcon
																	className='mx-2 text-black text-xl'
																	icon={faRotateLeft}
																/>
															</button>
														</td>
														<td className='px-6 py-3 whitespace-nowrap text-center'>
															<button
																onClick={() =>
																	deleteAlert(item._id, "deleteCourses")
																}>
																<FontAwesomeIcon
																	className='mx-2 text-red-500 text-xl'
																	icon={faTrash}
																/>
															</button>
														</td>
													</tr>
												))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div>
						<h2 className=' text-xl font-bold  text-red-500'>Empty</h2>
					</div>
				)}
			</div>
			<div>
				<div className='mb-8 mt-4'>
					<h3 className='text-3xl font-semibold text-center text-red-500'>
						Action For Teachers
					</h3>
				</div>

				{teacher.length > 0 ? (
					<div className='flex flex-col'>
						<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
							<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
								<div className='shadow overflow-hidden border-b border-red-200 sm:rounded-lg tables'>
									<table className='min-w-full divide-y divide-red-200'>
										<thead className='bg-slate-900 font-bold'>
											<tr>
												<th
													scope='col'
													className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
													Photo
												</th>
												<th
													scope='col'
													className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
													Name
												</th>
												<th
													scope='col'
													className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
													Designation
												</th>
												<th
													scope='col'
													className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
													Gender
												</th>
												<th
													scope='col'
													className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
													Email
												</th>
												<th
													scope='col'
													className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
													country
												</th>
												<th
													scope='col'
													className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
													Details
												</th>
												<th
													scope='col'
													className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
													Restore
												</th>
												<th
													scope='col'
													className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
													Delete
												</th>
											</tr>
										</thead>
										<tbody className='bg-white divide-y divide-red-300'>
											{teacher &&
												teacher.map((item, key) => (
													<tr key={key}>
														<td className='px-6 py-3 whitespace-nowrap text-center'>
															<img
																className='rounded-full mx-auto'
																width='50px'
																height='50px'
																src={item.image}
																alt={item.name}
															/>
														</td>
														<td className='px-6 py-3 whitespace-nowrap text-center'>
															{item.name}
														</td>
														<td className='px-6 py-3 whitespace-nowrap text-center'>
															{item.designation}
														</td>
														<td className='px-6 py-3 whitespace-nowrap text-center'>
															{item.gender}
														</td>
														<td className='px-6 py-3 whitespace-nowrap text-center'>
															{item.email}
														</td>
														<td className='px-6 py-3 whitespace-nowrap text-center'>
															{item.country}
														</td>
														<td className='px-6 py-3 whitespace-nowrap text-center'>
															<button>
																<FontAwesomeIcon
																	className='mx-2 text-black text-xl'
																	icon={faEye}
																/>
															</button>
														</td>
														<td className='px-6 py-3 whitespace-nowrap text-center'>
															<button
																onClick={() =>
																	updateAlert(
																		item._id,
																		"verified",
																		"teacherStatus",
																	)
																}>
																<FontAwesomeIcon
																	className='mx-2 text-black text-xl'
																	icon={faRotateLeft}
																/>
															</button>
														</td>
														<td className='px-6 py-3 whitespace-nowrap text-center'>
															<button
																onClick={() =>
																	deleteAlert(item._id, "deleteTeacher")
																}>
																<FontAwesomeIcon
																	className='mx-2 text-red-500 text-xl'
																	icon={faTrash}
																/>
															</button>
														</td>
													</tr>
												))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div>
						<h2 className=' text-xl font-bold  text-red-500'>Empty</h2>
					</div>
				)}
			</div>
		</div>
	);
};

export default RecycleBin;
