import React from "react";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import LoadingOverlay from "../../Loading/LoadingOverlay";

const StudentEducation = () => {
	const [showModal, setShowModal] = React.useState(false);
	const [education, setEducation] = React.useState();
	const { user } = useAuth();
	React.useEffect(() => {
		axios
			.get(
				`https://fierce-caverns-90976.herokuapp.com/allusers?email=${user?.email}`,
			)
			.then((res) => {
				setEducation(res.data?.educationalExp);
			});
	}, [user?.email, showModal]);

	return (
		<div className='container mx-auto px-4 md:px-11'>
			<div className='grid '>
				<div className=' w-full bg-white px-7 drop-shadow-xl  mb-5'>
					<div className='p-5 border-b border-solid border-red-500 rounded-t mb-5'>
						<h3 className='text-3xl font-semibold text-center text-red-500'>
							Educational
						</h3>
					</div>
					<div className='mb-2 mt-7 flex justify-between'>
						<h2 className='text-2xl text-left text-red-500 '>
							Educational Experiance:
						</h2>
						<div>
							<FontAwesomeIcon
								onClick={() => setShowModal(true)}
								icon={faPenToSquare}
								className='text-2xl sm:mr-9 mr-0 cursor-pointer'
							/>
						</div>
					</div>
					<div className='mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-9 '>
						<div className='mx-0 '>
							<div className='flex flex-col text-left'>
								<div className='my-2'>
									<h2 className='text-lg'>Educational Level:</h2>
									<p>{education?.educationalLevel || "N/A"}</p>
								</div>
								<div className='my-2'>
									<h2 className='text-lg'>Degree:</h2>
									<p>{education?.degree || "N/A"}</p>
								</div>
								<div className='my-2'>
									<h2 className='text-lg'>Institute Name:</h2>
									<p>{education?.instituteName || "N/A"}</p>
								</div>
								<div className='my-2'>
									<h2 className='text-lg'>Passing Year:</h2>
									<p>{education?.passingYear || "N/A"}</p>
								</div>
							</div>
						</div>
						<div className='mx-0 '>
							<div className='flex flex-col text-left'>
								<div className='my-2'>
									<h2 className='text-lg'>Current Year:</h2>
									<p>{education?.currentYear || "N/A"}</p>
								</div>
								<div className='my-2'>
									<h2 className='text-lg'>Grade:</h2>
									<p>{education?.grade || "N/A"}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{showModal ? (
				<>
					<Modal setShowModal={setShowModal} />
				</>
			) : null}
			{!user && <LoadingOverlay />}
		</div>
	);
};

export default StudentEducation;
