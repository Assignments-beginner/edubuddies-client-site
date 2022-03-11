import { JitsiMeeting } from "@jitsi/react-sdk";
import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";

const Test = () => {
	const config = {
		width: "300px",
		height: "400px",
		floating: true,
	};
	const steps = [
		{
			id: "1",
			message: "What is your name?",
			trigger: "2",
		},
		{
			id: "2",
			user: true,
			trigger: "3",
		},
		{
			id: "3",
			message: "Do you want to know about our courses?",
			trigger: "4",
		},
		{
			id: "4",
			options: [
				{ value: 1, label: "Yes", trigger: "5" },
				{ value: 2, label: "No", trigger: "3" },
			],
		},
		{
			id: "5",
			options: [
				{ value: 1, label: "Python", trigger: "6" },
				{ value: 2, label: "C++", trigger: "7" },
				{ value: 3, label: "C#", trigger: "8" },
				{ value: 3, label: "Web Development", trigger: "9" },
			],
		},
		{
			id: "6",
			message: "We have best Python developer.",
		},
		{
			id: "7",
			message: "We have best C++ developer.",
		},
		{
			id: "8",
			message: "We have best C# developer.",
		},
		{
			id: "9",
			message: "We have best Web developer.",
		},
	];
	/* 	const [room, setRoom] = useState();
	console.log(room);
	const [start, setStart] = useState(false);
	const createMeeting = () => {
		setStart(true);
	};
 */
	return (
		<div className='chat'>
			{/* 		{start ? (
				<JitsiMeeting
					roomName={room}
					configOverwrite={{
						startWithAudioMuted: true,
						hiddenPremeetingButtons: ["microphone"],
					}}
					getIFrameRef={(node) => (node.style.height = "800px")}
				/>
			) : (
				<>
					<input type='text' onChange={(e) => setRoom(e.target.value)} />
					<button onClick={createMeeting}>Create</button>
				</>
			)} */}
			<ChatBot
				headerTitle='Speech Recognition'
				recognitionEnable={true}
				speechSynthesis={{ enable: true, lang: "en" }}
				steps={steps}
				{...config}
			/>
		</div>
	);
};

export default Test;
