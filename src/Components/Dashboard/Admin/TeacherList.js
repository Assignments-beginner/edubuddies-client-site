import axios from "axios";
import React, { useEffect, useState } from "react";
import { updateAlert } from "../../../Utility/Utility";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import LoadingOverlay from "../../Loading/LoadingOverlay";

const TeacherList = () => {
	const [teachers, setTeachers] = useState([]);
	useEffect(() => {
		axios
			.get("https://fierce-caverns-90976.herokuapp.com/teachers")
			.then((res) => {
				const restData = res.data.filter((item) => item.status !== "deleted");
				setTeachers(restData);
			});
	}, [teachers]);

	return (
		<div className='container mx-auto px-4 md:px-9'>
			<div className='mb-8 mt-4'>
				<h3 className='text-3xl font-semibold text-center text-red-500'>
					Our Honour Teacher List
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
									{teachers &&
										teachers.map((item, key) => (
											<tr key={key}>
												<td className='px-6 py-3 whitespace-nowrap text-center'>
													<img
														className='rounded-full mx-auto'
														width='40px'
														height='40px'
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
													<button>View</button>
												</td>
												<td className='px-6 py-3 whitespace-nowrap text-center'>
													<button
														onClick={() =>
															updateAlert(item._id, "verified", "teacherStatus")
														}>
														{item?.status === "verified" ? (
															<div className='text-sm font-medium text-white bg-green-600 px-3 py-1 rounded-md'>
																{item?.status}
															</div>
														) : (
															<div className='text-sm font-medium text-white bg-yellow-600 px-3 py-1 rounded-md'>
																{"pending"}
															</div>
														)}
													</button>
												</td>
												<td className='px-6 py-3 whitespace-nowrap text-center'>
													<button
														onClick={() =>
															updateAlert(item._id, "deleted", "teacherStatus")
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
			{!teachers && <LoadingOverlay />}
		</div>
	);
};

export default TeacherList;
