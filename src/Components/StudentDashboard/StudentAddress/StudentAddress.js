import React from "react";
import PermanentAdd from "./PermanentAdd";
import PresentAdd from "./PresentAdd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const StudentAddress = () => {
	const [presentAddModal, setPresentAddModal] = React.useState(false);
	const [permanentAddModal, setPermanentAddModal] = React.useState(false);
	return (
		<div className='container mx-auto px-4 md:px-11'>
			<div className='grid '>
				<div className=' w-full bg-white px-7 drop-shadow-xl  mb-5'>
					<div className='p-5 border-b border-solid border-red-500 rounded-t mb-5'>
						<h3 className='text-3xl font-semibold text-center text-red-500'>
							Your Address
						</h3>
					</div>
					<div className='mb-2 mt-7 flex justify-between'>
						<h2 className='text-2xl text-left text-red-500 '>
							Present Address:
						</h2>
						<div>
							<FontAwesomeIcon
								onClick={() => setPresentAddModal(true)}
								icon={faPenToSquare}
								className='text-2xl sm:mr-9 mr-0 cursor-pointer'
							/>
						</div>
					</div>
					<div className='mx-auto grid grid-cols-1 md:grid-cols-2 gap-9 '>
						<div className='mx-0 '>
							<div className='flex flex-col text-left'>
								<div className='my-2'>
									<h2 className='text-lg'>Address Line 1:</h2>
									<p>asdasd</p>
								</div>
								<div className='my-2'>
									<h2 className='text-lg'>Address Line 2:</h2>
									<p>sac</p>
								</div>
								<div className='my-2'>
									<h2 className='text-lg'>City:</h2>
									<p>scasc</p>
								</div>
								<div className='my-2'>
									<h2 className='text-lg'>State:</h2>
									<p>sadas</p>
								</div>
							</div>
						</div>
						<div className='mx-0 '>
							<div className='flex flex-col text-left'>
								<div className='my-2'>
									<h2 className='text-lg'>Zip Code:</h2>
									<p>asdas</p>
								</div>
								<div className='my-2'>
									<h2 className='text-lg'>Country:</h2>
									<p>sac</p>
								</div>
							</div>
						</div>
					</div>
					<div className='mb-2 mt-7 flex justify-between'>
						<h2 className='text-2xl text-left text-red-500 '>
							Permanent Address:
						</h2>
						<div>
							<FontAwesomeIcon
								onClick={() => setPermanentAddModal(true)}
								icon={faPenToSquare}
								className='text-2xl sm:mr-9 mr-0 cursor-pointer'
							/>
						</div>
					</div>
					<div className='mx-auto grid grid-cols-1 md:grid-cols-2 gap-9 '>
						<div className='mx-0 '>
							<div className='flex flex-col text-left'>
								<div className='my-2'>
									<h2 className='text-lg'>Address Line 1:</h2>
									<p>asdasd</p>
								</div>
								<div className='my-2'>
									<h2 className='text-lg'>Address Line 2:</h2>
									<p>sac</p>
								</div>
								<div className='my-2'>
									<h2 className='text-lg'>City:</h2>
									<p>scasc</p>
								</div>
								<div className='my-2'>
									<h2 className='text-lg'>State:</h2>
									<p>sadas</p>
								</div>
							</div>
						</div>
						<div className='mx-0 '>
							<div className='flex flex-col text-left'>
								<div className='my-2'>
									<h2 className='text-lg'>Zip Code:</h2>
									<p>asdas</p>
								</div>
								<div className='my-2'>
									<h2 className='text-lg'>Country:</h2>
									<p>sac</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{presentAddModal ? (
				<>
					<PresentAdd setPresentAddModal={setPresentAddModal} />
				</>
			) : null}
			{permanentAddModal ? (
				<>
					<PermanentAdd setPermanentAddModal={setPermanentAddModal} />
				</>
			) : null}
		</div>
	);
};

export default StudentAddress;
