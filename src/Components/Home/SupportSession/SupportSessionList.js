import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrashCan,
	faXmark,
	faCheck,
	faPlus,
	faEye,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import SupportSessionModal from "./SupportSessionModal";
import NeedSupportDetailsModal from "./NeedSupportDetailsModal";

const SupportSessionList = () => {
	const [supportSessionModal, setSupportSessionModal] = React.useState(false);
	const [handleSolveModal, setHandleSolveModal] = React.useState(false);
	const [status, setStatus] = React.useState(false);
	const [deleted, setDeleted] = React.useState(false);
	const { user } = useAuth();
	const [supportSessions, setSupportSessions] = React.useState();
	React.useEffect(() => {
		axios
			.get(`https://fierce-caverns-90976.herokuapp.com/supportsession`)
			.then((res) => {
				setSupportSessions(res.data);
			});
	}, [deleted, supportSessionModal, status]);
	console.log(supportSessions);

	const handleDelete = (id) => {
		setDeleted(true);
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axios
					.delete(
						`https://fierce-caverns-90976.herokuapp.com/supportsession/${id}`,
					)
					.then(function(response) {
						Swal.fire(
							"Deleted!",
							"That Support Session has been deleted.",
							"success",
						);
						setDeleted(false);
					})
					.catch(function(error) {
						console.log(error);
					});
			}
		});
	};
	const handleStatus = (id, text, mark) => {
		setStatus(true);
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: `Yes, ${text} it!`,
		}).then((result) => {
			if (result.isConfirmed) {
				axios
					.put(
						`https://fierce-caverns-90976.herokuapp.com/supportsession/${id}`,
						{
							text: text,
						},
					)
					.then(function(response) {
						Swal.fire(
							`${text}!`,
							`That Support Session is ${text}.`,
							`${mark}`,
						);
						setStatus(false);
					})
					.catch(function(error) {
						console.log(error);
					});
			}
		});
	};
	let n = 1;
	const [handleSolveId, setHandleSolveId] = useState();
	const handleSolve = (id) => {
		setHandleSolveModal(true);
		setHandleSolveId(id);
	};

	return (
		<div className='container mx-auto px-4 md:px-9'>
			<div className='p-5 border-b border-solid border-red-500 rounded-t mb-5'>
				<div className='mb-2 mt-4 flex justify-between'>
					<h3 className='text-3xl font-semibold text-center text-red-500'>
						Support Sessions
					</h3>
					<div className='flex align-center text-red-500'>
						<span className='mr-2'>Add New Support Session</span>
						<FontAwesomeIcon
							onClick={() => setSupportSessionModal(true)}
							icon={faPlus}
							className='text-2xl sm:mr-9 mr-0 cursor-pointer'
						/>
					</div>
				</div>
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
											No
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
											Session Name
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
											Session URL
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
											Session Start
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
											Session End
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
											Students Need Support
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
								{supportSessions?.map((supportSession) => (
									<tbody className='bg-white divide-y divide-red-200'>
										<tr>
											<td className='px-6 py-3 whitespace-nowrap text-center'>
												{n++}
											</td>
											<td className='px-6 py-3 whitespace-nowrap text-center'>
												{supportSession?.name}
											</td>
											<td className='px-6 py-3 whitespace-nowrap text-center text-blue-600'>
												<a
													href={supportSession?.url}
													target='_blank'
													rel='noreferrer'>
													{supportSession?.url}
												</a>
											</td>
											<td className='px-6 py-3 whitespace-nowrap text-center'>
												{supportSession?.startTime}
											</td>
											<td className='px-6 py-3 whitespace-nowrap text-center'>
												{supportSession?.endTime}
											</td>
											<td className='px-6 py-3 whitespace-nowrap text-center'>
												{supportSession?.needSupport?.length || 0}
											</td>
											{`${supportSession?.status}` === "End" && (
												<td className='px-6 py-3 whitespace-nowrap text-center'>
													<p className='text-center text-white rounded-lg bg-red-500 w-[80px] mx-auto'>{`${supportSession?.status}`}</p>
												</td>
											)}
											{`${supportSession?.status}` === "Pending" && (
												<td className='px-6 py-3 whitespace-nowrap text-center'>
													<p className='text-center text-white rounded-lg bg-yellow-500 w-[80px] mx-auto'>{`${supportSession?.status}`}</p>
												</td>
											)}
											{`${supportSession?.status}` === "Live" && (
												<td className='px-6 py-3 whitespace-nowrap text-center'>
													<p className='text-center text-white rounded-lg bg-green-500 w-[80px] mx-auto'>{`${supportSession?.status}`}</p>
												</td>
											)}
											<td className='px-6 py-3 whitespace-nowrap text-center'>
												<FontAwesomeIcon
													onClick={() => handleSolve(supportSession?._id)}
													icon={faEye}
													className='text-2xl mx-2 hover:text-red-500 cursor-pointer'
												/>
												<FontAwesomeIcon
													onClick={() =>
														handleStatus(supportSession?._id, "Live", "success")
													}
													icon={faCheck}
													className='text-2xl mx-2 hover:text-red-500 cursor-pointer'
												/>
												<FontAwesomeIcon
													onClick={() =>
														handleStatus(supportSession?._id, "End", "error")
													}
													icon={faXmark}
													className='text-2xl mx-2 hover:text-red-500 cursor-pointer'
												/>
												<FontAwesomeIcon
													onClick={() => handleDelete(supportSession?._id)}
													icon={faTrashCan}
													className='text-2xl mx-2 text-red-500 cursor-pointer'
												/>
											</td>
										</tr>
									</tbody>
								))}
							</table>
						</div>
					</div>
				</div>
			</div>
			{handleSolveModal ? (
				<>
					<NeedSupportDetailsModal
						handleSolveId={handleSolveId}
						setHandleSolveModal={setHandleSolveModal}
					/>
				</>
			) : null}
			{supportSessionModal ? (
				<>
					<SupportSessionModal
						setSupportSessionModal={setSupportSessionModal}
					/>
				</>
			) : null}
		</div>
	);
};

export default SupportSessionList;
