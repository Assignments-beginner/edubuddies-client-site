import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import AddSkillModal from "./AddSkillModal";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import LoadingOverlay from "../../Loading/LoadingOverlay";
import Swal from "sweetalert2";

const StudentSkills = () => {
	const { user } = useAuth();
	const [skills, setSkills] = React.useState();
	React.useEffect(() => {
		axios
			.get(`http://localhost:5000/allusers?email=${user?.email}`)
			.then((res) => {
				setSkills(res.data);
			});
	}, [user?.email]);
	console.log(skills);

	const [deleted, setDeleted] = React.useState(false);
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
					.put(`http://localhost:5000/skillsetDelete/${user?.email}/${skill}`)
					.then(function (response) {
						Swal.fire("Deleted!", "That mail has been deleted.", "success");
						setDeleted(true);
					})
					.catch(function (error) {
						console.log(error);
					});
			}
		});
	};

	const [showAddSkillModal, setShowAddSkillModal] = React.useState(false);
	let n = 1;

	return (
		<div className='container mx-auto px-4 md:px-11'>
			<div className='p-5 border-b border-solid border-red-500 rounded-t mb-5'>
				<div className='mb-2 mt-7 flex justify-between'>
					<h3 className='text-3xl font-semibold text-center text-red-500'>
						Skills
					</h3>
					<div>
						<FontAwesomeIcon
							onClick={() => setShowAddSkillModal(true)}
							icon={faPenToSquare}
							className='text-2xl sm:mr-9 mr-0 cursor-pointer'
						/>
					</div>
				</div>
			</div>
			<div class='flex flex-col'>
				<div class='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div class='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
						<div class='shadow overflow-hidden border-b border-red-200 sm:rounded-lg'>
							<table class='min-w-full divide-y divide-red-200'>
								<thead class='bg-red-50'>
									<tr>
										<th
											scope='col'
											class='px-6 py-3 text-left text-xs font-medium text-red-500 uppercase tracking-wider'>
											No
										</th>
										<th
											scope='col'
											class='px-6 py-3 text-left text-xs font-medium text-red-500 uppercase tracking-wider'>
											Skill
										</th>
										<th
											scope='col'
											class='px-6 py-3 text-left text-xs font-medium text-red-500 uppercase tracking-wider'>
											Experiance Year
										</th>
										<th
											scope='col'
											class='px-6 py-3 text-left text-xs font-medium text-red-500 uppercase tracking-wider'>
											Projects
										</th>
										<th
											scope='col'
											class='px-6 py-3 text-left text-xs font-medium text-red-500 uppercase tracking-wider'>
											Action
										</th>
									</tr>
								</thead>
								{skills?.skillset?.map((skill) => (
									<tbody class='bg-white divide-y divide-red-200'>
										<tr>
											<td class='px-6 py-4 whitespace-nowrap text-left'>
												{n++}
											</td>
											<td class='px-6 py-4 whitespace-nowrap text-left'>
												{skill?.skill}
											</td>
											<td class='px-6 py-4 whitespace-nowrap text-left'>
												{skill?.expYear}
											</td>
											<td class='px-6 py-4 whitespace-nowrap text-left'>
												{skill?.projects}
											</td>
											<td class='px-6 py-4 whitespace-nowrap text-left'>
												<FontAwesomeIcon
													onClick={() => handleDelete(skill?.skill)}
													icon={faTrashCan}
													className='text-2xl hover:text-red-500 cursor-pointer'
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
			{/* {!data && <LoadingOverlay />} */}
		</div>
	);
};

export default StudentSkills;
