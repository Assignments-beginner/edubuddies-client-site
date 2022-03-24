import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrashCan,
	faXmark,
	faCheck,
	faPlus,
	faEye,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const NeedSupportDetailsModal = ({ handleSolveId, setHandleSolveModal }) => {
	const { user } = useAuth();
	const [submitting, setSubmitting] = useState(false);
	const [singlesupportsession, setSinglesupportsession] = React.useState();
	React.useEffect(() => {
		axios
			.get(
				`https://fierce-caverns-90976.herokuapp.com/singlesupportsession/${handleSolveId}`,
			)
			.then((res) => {
				setSinglesupportsession(res.data);
			});
	}, [handleSolveId, submitting]);
	const handleStatus = (datas, status, mark) => {
		setSubmitting(true);
		const data = { ...datas, status };
		console.log(data);
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: `Yes, ${status} it!`,
		}).then((result) => {
			if (result.isConfirmed) {
				axios
					.put(
						`https://fierce-caverns-90976.herokuapp.com/singlesupportsessionstatus/${handleSolveId}`,
						{
							data,
						},
					)
					.then(function(response) {
						setSubmitting(false);
						Swal.fire(
							`${status}!`,
							`That Support Session is ${status}.`,
							`${mark}`,
						);
					})
					.catch(function(error) {
						console.log(error);
					});
			}
		});
	};
	let n = 1;

	return (
		<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none modals'>
			<div className='relative w-auto my-6 mx-auto'>
				<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
					<div className=' p-5 border-b border-solid border-red-500 rounded-t'>
						<h3 className='text-3xl font-semibold text-center text-red-500'>
							All support details
						</h3>
					</div>
					<div className='flex flex-col'>
						<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
							<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
								<div className='shadow overflow-hidden border-b border-red-200 sm:rounded-lg m-4 tables'>
									<table className='min-w-full divide-y divide-red-200'>
										<thead className='bg-slate-900 font-bold'>
											<tr>
												<th
													scope='col'
													className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
													No
												</th>
												<th
													scope='col'
													className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
													Name
												</th>
												<th
													scope='col'
													className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
													Email
												</th>
												<th
													scope='col'
													className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
													Problem
												</th>
												<th
													scope='col'
													className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
													Status
												</th>
												<th
													scope='col'
													className='px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider'>
													Action
												</th>
											</tr>
										</thead>
										{singlesupportsession?.needSupport?.map(
											(supportSession) => (
												<tbody className='bg-white divide-y divide-red-200'>
													<tr>
														<td className='px-6 py-3 whitespace-nowrap text-left'>
															{n++}
														</td>
														<td className='px-6 py-3 whitespace-nowrap text-left'>
															{supportSession?.name}
														</td>
														<td className='px-6 py-3 whitespace-nowrap text-left'>
															{supportSession?.email}
														</td>
														<td className='px-6 py-3 whitespace-nowrap text-left'>
															{supportSession?.problem}
														</td>
														{`${supportSession?.status}` === "Absent" && (
															<td className='px-4 py-3 whitespace-nowrap text-left'>
																<p className='text-center text-white rounded-lg bg-red-500'>{`${supportSession?.status}`}</p>
															</td>
														)}
														{`${supportSession?.status}` === "Pending" && (
															<td className='px-4 py-3 whitespace-nowrap text-left'>
																<p className='text-center text-white rounded-lg bg-yellow-500'>{`${supportSession?.status}`}</p>
															</td>
														)}
														{`${supportSession?.status}` === "Solved" && (
															<td className='px-4 py-3 whitespace-nowrap text-left'>
																<p className='text-center text-white rounded-lg bg-green-500'>{`${supportSession?.status}`}</p>
															</td>
														)}
														<td className='px-6 py-3 whitespace-nowrap text-left'>
															<FontAwesomeIcon
																onClick={() =>
																	handleStatus(
																		supportSession,
																		"Solved",
																		"success",
																	)
																}
																icon={faCheck}
																className='text-2xl mx-1 hover:text-red-500 cursor-pointer'
															/>
															<FontAwesomeIcon
																onClick={() =>
																	handleStatus(
																		supportSession,
																		"Absent",
																		"error",
																	)
																}
																icon={faXmark}
																className='text-2xl mx-1 hover:text-red-500 cursor-pointer'
															/>
														</td>
													</tr>
												</tbody>
											),
										)}
									</table>
								</div>
							</div>
						</div>
						<div className='flex items-center justify-end p-6 border-t border-solid border-red-500 rounded-b mt-2'>
							<button
								className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
								type='button'
								onClick={() => setHandleSolveModal(false)}>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NeedSupportDetailsModal;
