import axios from "axios";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFaceFrown,
	faVideo,
	faCode,
} from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../../hooks/useAuth";
import LoadingOverlay from "../../Loading/LoadingOverlay";
import JoinSupportSessionModal from "./JoinSupportSessionModal";

const AllLiveSupportSessions = () => {
	const { user } = useAuth();
	const [joinSupportSessionModal, setJoinSupportSessionModal] = React.useState(
		false,
	);
	const [id, setId] = React.useState();

	const [supportSessions, setSupportSessions] = React.useState();
	console.log(id);
	React.useEffect(() => {
		axios
			.get(`https://fierce-caverns-90976.herokuapp.com/supportsession`)
			.then((res) => {
				setSupportSessions(res.data);
			});
	}, []);
	console.log(supportSessions);
	const setModalAndId = (id) => {
		setJoinSupportSessionModal(true);
		setId(id);
	};
	const filterLiveSupportSessions = supportSessions?.filter(
		(value) => value?.status === "Live",
	);
	console.log("filterLiveSupportSessions", filterLiveSupportSessions);

	const newArray = filterLiveSupportSessions?.sort(
		(a, b) => a?.needSupport?.length - b?.needSupport?.length,
	);
	console.log("newArray", newArray);
	const serialLive = filterLiveSupportSessions?.filter((a) =>
		a?.needSupport?.some((u) => u?.email?.includes(user?.email)),
	);
	const serialPending = serialLive?.filter((a) =>
		a?.needSupport?.some((u) => u?.status?.includes("Pending")),
	);
	console.log("serialLive", serialLive);

	return (
		<div className='container mx-auto p-1'>
			<div
				className='w-full mx-auto grid items-center '
				style={{ minHeight: "90vh" }}>
				<>
					{filterLiveSupportSessions?.length > 0 ? (
						<>
							{serialPending?.length === 0 ? (
								<div>
									{
										newArray?.map((supportSession) => (
											<button
												onClick={() => setModalAndId(supportSession?._id)}
												className='p-5 bg-red-500 text-white rounded-lg'>
												<FontAwesomeIcon
													className='text-white mx-2 group-hover:text-red-500'
													icon={faCode}
												/>{" "}
												Request For Support Session
											</button>
										))[0]
									}
								</div>
							) : (
								<div>
									{
										serialLive?.map((supportSession) => (
											<button
												onClick={() => setModalAndId(supportSession?._id)}
												className='px-5 py-3 bg-red-500 text-white rounded-md group hover:text-red-500 hover:bg-transparent border border-red-500 duration-200'>
												<FontAwesomeIcon
													className='text-white mx-2 group-hover:text-red-500'
													icon={faVideo}
												/>{" "}
												Click to Join On Support Session
											</button>
										))[0]
									}
								</div>
							)}
						</>
					) : (
						<div>
							<FontAwesomeIcon
								className='mx-auto text-red-500 icon text-4xl mb-4'
								icon={faFaceFrown}
							/>
							<h2 className=' text-xl font-bold  text-red-500'>
								Sorry, No support sessions for now
							</h2>
						</div>
					)}
				</>

				{joinSupportSessionModal ? (
					<>
						<JoinSupportSessionModal
							setJoinSupportSessionModal={setJoinSupportSessionModal}
							id={id}
						/>
					</>
				) : null}
			</div>
			{!supportSessions && <LoadingOverlay />}
		</div>
	);
};

export default AllLiveSupportSessions;
