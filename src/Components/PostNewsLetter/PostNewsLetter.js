import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const PostNewsLetter = () => {
	const { register, handleSubmit, reset } = useForm();

	const [submitting, setSubmitting] = useState(false);
	const onSubmit = ({ subject }) => {
		const data = {
			subject,
			details: convertedContent,
			date: new Date(),
		};
		setSubmitting(true);
		axios
			.post(`https://fierce-caverns-90976.herokuapp.com/postnewsletter`, data)
			.then(function (response) {
				console.log("response", response);
				Swal.fire({
					icon: "success",
					title: "Your NewsLetter Successfully Send To All Subscribed Users",
					showConfirmButton: false,
					timer: 1500,
				});
				setSubmitting(false);
			})
			.catch(function (error) {
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
		<div className='container mx-auto px-4 md:px-11  '>
			<h3 className='text-3xl font-semibold text-center  mt-2 text-red-500'>
				Send NewsLetter
			</h3>
			<p>Send NewsLetter To All Subscribed Users</p>
			<div className=' mx-auto w-full bg-white p-5 drop-shadow-xl '>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col space-y-3'>
					<div className='flex flex-col space-y-1 mx-auto'>
						<div className='relative p-6 grid grid-cols-1 gap-3'>
							<div className='flex flex-col space-y-1'>
								<label
									for='subject'
									className='text-sm font-semibold text-black text-left'>
									NewsLetter Subject
								</label>
								<input
									type='text'
									id='subject'
									name='subject'
									{...register("subject", { required: true })}
									autofocus
									className='px-4 py-2 transition duration-300 border border-black rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200'
								/>
							</div>
							<div className='space-y-1'>
								<label
									for='details'
									className='flex text-sm font-semibold text-black text-left mt-2'>
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
								className='bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
								type='submit'>
								Send Newsletter
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default PostNewsLetter;
