import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { updateAlert } from "../../../Utility/Utility";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import LoadingOverlay from "../../Loading/LoadingOverlay";
const CoursesList = () => {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		const url = "https://fierce-caverns-90976.herokuapp.com/courses";
		axios.get(url).then((res) => {
			const data = res.data.filter((item) => item.courseStatus !== "delete");
			setCourses(data);
		});
	}, [courses]);

	// courses update
	const updateCourseStatus = (id, statusName) => {
		const status = {
			statusName: statusName,
		};
		console.log(status);
		Swal.fire({
			title: "Are you sure?",
			text: `You won't be able ${statusName} this!`,
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "green",
			cancelButtonColor: "red",
			confirmButtonText: "Yes, Approved it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axios
					.patch(
						`https://fierce-caverns-90976.herokuapp.com/courses/${id}`,
						status,
					)
					.then((res) => {
						if (res.data.modifiedCount > 0) {
							Swal.fire({
								position: "center",
								icon: "success",
								title: "Updated Successfully",
								showConfirmButton: false,
								timer: 1500,
							});
						}
					});
			}
		});
	};

	return (
		<div className='container mx-auto px-4 md:px-9'>
			<div className='mb-8 mt-4'>
				<h3 className='text-3xl font-semibold text-center text-red-500'>
					All Course List
				</h3>
			</div>
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
											Status
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
											Action
										</th>
									</tr>
								</thead>
								<tbody className='bg-white divide-y divide-red-200'>
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
												<td className='px-6 py-3 whitespace-nowrap text-center'>
													<button
														onClick={() =>
															updateAlert(item._id, "approved", "courses")
														}>
														{item?.courseStatus === "approved" ? (
															<div className='text-sm font-medium text-white bg-green-600 px-3 py-1 rounded-md'>
																{item?.courseStatus}
															</div>
														) : (
															<div className='text-sm font-medium text-white bg-yellow-600 px-3 py-1 rounded-md'>
																{item?.courseStatus}
															</div>
														)}
													</button>
												</td>
												<td className='px-6 py-3 whitespace-nowrap text-center'>
													<button
														onClick={() =>
															updateAlert(item._id, "delete", "courses")
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
			{!courses && <LoadingOverlay />}
		</div>
	);
};

export default CoursesList;
