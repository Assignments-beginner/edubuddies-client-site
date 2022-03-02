import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import AddSkillModal from "./AddSkillModal";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const StudentSkills = () => {
	const { user } = useAuth();
	const [data, setData] = React.useState();
	React.useEffect(() => {
		axios
			.get(`http://localhost:5000/allusers?email=${user?.email}`)
			.then((res) => {
				setData(res.data?.skillset);
			});
	}, [user?.email]);

	const [datas, setDatas] = React.useState();
	React.useEffect(() => {
		axios.get(`http://localhost:5000/allusers?email=${user?.email}`).then((res) => {
			setDatas(res.data);
		});
	}, [user?.email]);
	console.log(datas);

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
						<div class='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
							<table class='min-w-full divide-y divide-gray-200'>
								<thead class='bg-gray-50'>
									<tr>
										<th
											scope='col'
											class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
											No
										</th>
										<th
											scope='col'
											class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
											Skill
										</th>
										<th
											scope='col'
											class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
											Experiance Year
										</th>
										<th
											scope='col'
											class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
											Projects
										</th>
									</tr>
								</thead>
								<tbody class='bg-white divide-y divide-gray-200'>
									<tr>
										<td class='px-6 py-4 whitespace-nowrap text-left'>{n++}</td>
										<td class='px-6 py-4 whitespace-nowrap text-left'>
											{data?.skill}
										</td>
										<td class='px-6 py-4 whitespace-nowrap text-left'>
											{data?.expYear}
										</td>
										<td class='px-6 py-4 whitespace-nowrap text-left'>
											{data?.projects}
										</td>
									</tr>
								</tbody>
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
		</div>
	);
};

export default StudentSkills;
