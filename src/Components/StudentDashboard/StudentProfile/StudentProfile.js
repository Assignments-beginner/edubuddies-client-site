import React from "react";
import useAuth from "../../../hooks/useAuth";
import Modal from "./Modal";

const StudentProfile = () => {
	const [showModal, setShowModal] = React.useState(false);
	const { user } = useAuth();
	return (
		<div className='container mx-auto px-4 md:px-11'>
			<div className='grid '>
				<div className=' w-full bg-white px-7 drop-shadow-xl '>
					<div className='p-5 border-b border-solid border-red-500 rounded-t mb-5'>
						<h3 className='text-3xl font-semibold text-center text-red-500'>
							Your Profile
						</h3>
					</div>
					<div className='mx-auto grid grid-cols-1 md:grid-cols-2 gap-9 '>
						<div className='mx-auto '>
							<div className='flex flex-col'>
								<img
									src={user?.photoURL}
									alt={user?.displayName}
									style={{
										width: "150px",
										height: "150px",
										borderRadius: "50%",
									}}
								/>
								<button
									onClick={() => setShowModal(true)}
									style={{
										width: "150px",
									}}
									className=' px-4 py-2 text-lg my-6 font-semibold text-white transition-colors duration-300 bg-red-500 rounded-3xl shadow hover:bg-red-600 focus:outline-none focus:ring-red-200 focus:ring-4'>
									Update Profile
								</button>
							</div>
						</div>
						<div className='mx-auto md:mx-0 '>
							<div className='flex flex-col text-left'>
								<div className='my-2'>
									<h2 className='text-lg'>Student ID:</h2>
									<p>WEB4-2221</p>
								</div>
								<div className='my-2'>
									<h2 className='text-lg'>Full Name:</h2>
									<p>{user?.displayName}</p>
								</div>
								<div className='my-2'>
									<h2 className='text-lg'>Email Address:</h2>
									<p>{user?.email}</p>
								</div>
								<div className='my-2'>
									<h2 className='text-lg'>Phone:</h2>
									<p>01861917938</p>
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
		</div>
	);
};

export default StudentProfile;
