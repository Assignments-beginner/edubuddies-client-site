import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./AutoEmailSend.css";

const AutoEmailSendTest = () => {
	const { register, handleSubmit, reset } = useForm();

	const [submitting, setSubmitting] = useState(false);
	const onSubmit = ({ subject, bcc, cc }) => {
		const data = {
			email: convertedContent,
			subject,
			bcc,
			cc,
		};
		setSubmitting(true);
		axios
			.post(`https://fierce-caverns-90976.herokuapp.com/autoEmail`, data)
			.then(function(response) {
				console.log("response", response);
				Swal.fire({
					icon: "success",
					title: "Your Messsage Successfully Updated",
					showConfirmButton: false,
					timer: 1500,
				});
				setSubmitting(false);
			})
			.catch(function(error) {
				console.log("error", error);
				console.log(error);
			});
		console.log(data);
	};

	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty(),
	);
	const [convertedContent, setConvertedContent] = useState(null);
	console.log(convertedContent);
	const handleEditorChange = (state) => {
		setEditorState(state);
		convertContentToHTML();
	};

	const convertContentToHTML = () => {
		let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
		setConvertedContent(currentContentAsHTML);
	};

	return (
		<div className='container mx-auto px-4 md:px-11'>
			<div className=' mx-auto w-full bg-white p-5 drop-shadow-xl '>
				<h3 className='text-3xl font-semibold text-center text-red-500'>
					Auto Email Sending
				</h3>
				<p>Send Email to all students</p>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col space-y-3'>
					<div className='flex flex-col space-y-1 mx-auto'>
						<div className='relative p-6 grid grid-cols-1 gap-3'>
							<div className='flex flex-col space-y-1'>
								<label
									for='subject'
									className='text-md font-semibold text-black text-left tracking-widest'>
									Email Subject
								</label>
								<input
									type='text'
									id='subject'
									name='subject'
									{...register("subject", { required: true })}
									autofocus
									className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
								/>
							</div>
							<div className='flex flex-col space-y-1'>
								<label
									for='cc'
									className='text-md font-semibold text-black text-left tracking-widest'>
									CC
								</label>
								<input
									type='text'
									id='cc'
									name='cc'
									{...register("cc")}
									autofocus
									className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
								/>
							</div>
							<div className='flex flex-col space-y-1'>
								<label
									for='bcc'
									className='text-md font-semibold text-black text-left tracking-widest'>
									BCC
								</label>
								<input
									type='text'
									id='bcc'
									name='bcc'
									{...register("bcc")}
									autofocus
									className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
								/>
							</div>
							<div className='space-y-1'>
								<label
									for='email'
									className='flex text-sm font-semibold text-black text-left mt-2 text-md tracking-widest'>
									Body
								</label>
								<Editor
									editorState={editorState}
									onEditorStateChange={handleEditorChange}
									wrapperClassName='wrapper'
									editorClassName='editor'
									toolbarClassName='toolbar'
								/>
							</div>
							<button
								className='bg-red-500 w-1/6 ml-2 py-3 rounded-md border border-red-500 text-white -tracking-tighter hover:bg-transparent hover:text-red-500 duration-300'
								type='submit'>
								Send Email
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AutoEmailSendTest;
