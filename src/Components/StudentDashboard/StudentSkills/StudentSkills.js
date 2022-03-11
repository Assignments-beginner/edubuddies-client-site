import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import AddSkillModal from "./AddSkillModal";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import LoadingOverlay from "../../Loading/LoadingOverlay";
import Swal from "sweetalert2";

const StudentSkills = () => {
	const [showAddSkillModal, setShowAddSkillModal] = React.useState(false);
	const [deleted, setDeleted] = React.useState(false);
	const { user } = useAuth();
	const [skills, setSkills] = React.useState();
	React.useEffect(() => {
		axios
			.get(
				`https://fierce-caverns-90976.herokuapp.com/allusers?email=${user?.email}`,
			)
			.then((res) => {
				setSkills(res.data);
			});
	}, [user?.email, deleted, showAddSkillModal]);
	console.log(skills);

	const handleDelete = (skill) => {
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
					.put(
						`https://fierce-caverns-90976.herokuapp.com/skillsetDelete/${user?.email}/${skill}`,
					)
					.then(function(response) {
						Swal.fire("Deleted!", "That mail has been deleted.", "success");
						setDeleted(true);
					})
					.catch(function(error) {
						console.log(error);
					});
			}
		});
	};

	let n = 1;

	return (
		<div className='container mx-auto px-4 md:px-9'>
			<div className='p-5 border-b border-solid border-red-500 rounded-t mb-5'>
				<div className='mb-2 mt-4 flex justify-between'>
					<h3 className='text-3xl font-semibold text-center text-red-500'>
						Skills
					</h3>
					<div>
						<FontAwesomeIcon
							onClick={() => setShowAddSkillModal(true)}
							icon={faPenToSquare}
							className='text-2xl sm:mr-9 mr-0 cursor-pointer text-red-500'
						/>
					</div>
				</div>
			</div>
			<div className='flex flex-col'>
				<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
						<div
							className='shadow overflow-hidden border-b border-red-200 sm:rounded-lg'
							style={{
								maxWidth: "75vw",
								overflowX: "scroll",
							}}>
							<table className='min-w-full divide-y divide-red-200'>
								<thead className='bg-black font-bold'>
									<tr>
										<th
											scope='col'
											className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
											No
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
											Skill
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
											Experiance Year
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
											Projects
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
											Action
										</th>
									</tr>
								</thead>
								{skills?.skillset?.map((skill) => (
									<tbody className='bg-white divide-y divide-red-200'>
										<tr>
											<td className='px-6 py-3 whitespace-nowrap text-center'>
												{n++}
											</td>
											<td className='px-6 py-3 whitespace-nowrap text-center'>
												{skill?.skill}
											</td>
											<td className='px-6 py-3 whitespace-nowrap text-center'>
												{skill?.expYear}
											</td>
											<td className='px-6 py-3 whitespace-nowrap text-center'>
												{skill?.projects}
											</td>
											<td className='px-6 py-3 whitespace-nowrap text-center'>
												<FontAwesomeIcon
													onClick={() => handleDelete(skill?.skill)}
													icon={faTrashCan}
													className='text-2xl hover:text-red-500 cursor-pointer '
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
			{showAddSkillModal ? (
				<>
					<AddSkillModal setShowAddSkillModal={setShowAddSkillModal} />
				</>
			) : null}
			{!user && <LoadingOverlay />}
		</div>
	);
};

export default StudentSkills;
