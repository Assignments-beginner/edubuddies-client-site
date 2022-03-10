import { JitsiMeeting } from "@jitsi/react-sdk";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
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
	console.log("serialLive", serialLive);
	const [supportRoom, setSupportRoom] = useState();

	return (
		<div className='container mx-auto px-4 md:px-11'>
			{supportRoom && (
				<JitsiMeeting
					roomName={supportRoom}
					configOverwrite={{
						startWithAudioMuted: true,
						hiddenPremeetingButtons: ["microphone"],
					}}
					getIFrameRef={(node) => (node.style.height = "95vh")}
				/>
			)}
			{serialLive?.length === 0 ? (
				<div className='grid grid-cols-4 gap-2 mt-4'>
					{
						newArray?.map((supportSession) => (
							<button
								onClick={() => setModalAndId(supportSession?._id)}
								className='p-5 bg-red-500 text-white'>
								Support Session
							</button>
						))[0]
					}
				</div>
			) : (
				<div className='grid grid-cols-4 gap-2 mt-4'>
					{
						serialLive?.map((supportSession) => (
							<button
								onClick={() => setModalAndId(supportSession?._id)}
								className='p-5 bg-red-500 text-white'>
								Support Session
							</button>
						))[0]
					}
				</div>
			)}
			{joinSupportSessionModal ? (
				<>
					<JoinSupportSessionModal
						setSupportRoom={setSupportRoom}
						setJoinSupportSessionModal={setJoinSupportSessionModal}
						id={id}
					/>
				</>
			) : null}
		</div>
	);
};

export default AllLiveSupportSessions;
