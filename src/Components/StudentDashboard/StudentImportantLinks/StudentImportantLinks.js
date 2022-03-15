import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import LoadingOverlay from "../../Loading/LoadingOverlay";

const StudentImportantLinks = () => {
	const { user } = useAuth();
	const [showModal, setShowModal] = React.useState(false);
	const [importantlinks, setImportantlinks] = React.useState();
	React.useEffect(() => {
		axios
			.get(
				`https://fierce-caverns-90976.herokuapp.com/allusers?email=${user?.email}`,
			)
			.then((res) => {
				setImportantlinks(res.data?.importantlinks);
			});
	}, [user?.email, showModal]);

	return (
		<div className='container mx-auto px-4 md:px-11'>
			<div className='grid '>
				<div className=' w-full bg-white px-7 drop-shadow-xl  mb-5'>
					<div className='p-5 border-b border-solid border-red-500 rounded-t mb-5'>
						<h3 className='text-3xl font-semibold text-center text-red-500'>
							Important Links
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
					<div className='mx-auto grid grid-cols-1 md:grid-cols-2 gap-9 '>
						<div className='mx-0 '>
							<div className='flex flex-col text-left'>
								<div className='my-2'>
									<h2 className='text-lg'>CV Link:</h2>
									<p>{importantlinks?.cvLink || "N/A"}</p>
								</div>
								<div className='my-2'>
									<h2 className='text-lg'>Github Profile:</h2>
									<p>{importantlinks?.githubLink || "N/A"}</p>
								</div>
								<div className='my-2'>
									<h2 className='text-lg'>Portfolio:</h2>
									<p>{importantlinks?.portfolio || "N/A"}</p>
								</div>
								<div className='my-2'>
									<h2 className='text-lg'>LinkedIn Profile:</h2>
									<p>{importantlinks?.linkedinProfile || "N/A"}</p>
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

export default StudentImportantLinks;
