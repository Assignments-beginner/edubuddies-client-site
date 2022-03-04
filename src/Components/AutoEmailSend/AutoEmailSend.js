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
			.then(function (response) {
				console.log("response", response);
				Swal.fire({
					icon: "success",
					title: "Your Messsage Successfully Updated",
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
    EditorState.createEmpty()
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
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col space-y-3'>
				<div className='relative w-full my-6 mx-auto max-w-3xl'>
					<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
						<div className=' p-5 border-b border-solid border-red-500 rounded-t'>
							<h3 className='text-3xl font-semibold text-center text-red-500'>
								Auto Email Sending
							</h3>
							<p>Send Email to all students</p>
						</div>
						<div className='relative p-6 grid grid-cols-1 gap-3'>
							<div className='flex flex-col space-y-1'>
								<label
									for='subject'
									className='text-sm font-semibold text-black text-left'>
									Email Subject
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
							<div className='flex flex-col space-y-1'>
								<label
									for='cc'
									className='text-sm font-semibold text-black text-left'>
									CC
								</label>
								<input
									type='text'
									id='cc'
									name='cc'
									{...register("cc")}
									autofocus
									className='px-4 py-2 transition duration-300 border border-black rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200'
								/>
							</div>
							<div className='flex flex-col space-y-1'>
								<label
									for='bcc'
									className='text-sm font-semibold text-black text-left'>
									BCC
								</label>
								<input
									type='text'
									id='bcc'
									name='bcc'
									{...register("bcc")}
									autofocus
									className='px-4 py-2 transition duration-300 border border-black rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200'
								/>
							</div>
							<div className='space-y-1'>
								<label
									for='email'
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
								Send Email
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AutoEmailSendTest;
