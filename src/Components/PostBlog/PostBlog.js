import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import Loading from "../Loading/Loading";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import BlogList from "../BlogList/BlogList";

const PostBlog = () => {
	const { user } = useAuth();
	console.log(user);
	const [fileLink, setFileLink] = useState(null);
	const [loading, setLoading] = useState(false);
	const uploadFile = async (e) => {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "testupload");
		setLoading(true);
		const res = await fetch(
			"https://api.cloudinary.com/v1_1/dqdug0ows/image/upload",
			{
				method: "POST",
				body: data,
			},
		);
		const file = await res.json();
		setFileLink(file.secure_url);
		setLoading(false);
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

	const [submitting, setSubmitting] = useState(false);
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = ({ blogName }) => {
		const blog = {
			blogId: "Blog" + Math.floor(Math.random() * 90000) + 10000,
			publisher: user?.displayName,
			email: user?.email,
			photo: fileLink,
			blogName,
			blogDetails: convertedContent,
			date: new Date(),
			reviews: [],
			blogStatus: "Pending",
		};
		setSubmitting(true);
		axios
			.post(`https://fierce-caverns-90976.herokuapp.com/blogs`, blog)
			.then(function (response) {
				Swal.fire({
					icon: "success",
					title: "Your File Successfully Added",
					showConfirmButton: true,
					timer: 2500,
				});
				setSubmitting(false);
				setFileLink(null);
				reset();
			})
			.catch(function (error) {
				console.log("error", error);
				console.log(error);
			});
		console.log(blog);
	};

	return (
		<div className='container mx-auto px-4 md:px-11  '>
			<h1 className='text-center text-3xl uppercase font-semibold mt-14 mb-5 text-red-500'>
				Post New Blog
			</h1>

			<div className='md:w-2/4 mx-auto w-full bg-white p-5 drop-shadow-xl '>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col space-y-3'>
					<div className='flex flex-col space-y-1 mx-auto'>
						{!loading ? (
							<>
								{!fileLink ? (
									<label className='w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer '>
										<FontAwesomeIcon
											icon={faCloudArrowUp}
											className='text-2xl rounded-full bg-gray-700 text-white p-3'
										/>
										<span className='mt-2 text-base leading-normal'>
											Select a photo
										</span>
										<input
											type='file'
											className='hidden'
											onChange={uploadFile}
										/>
									</label>
								) : (
									<img src={fileLink} alt='' width='230px' height='130px' />
								)}
							</>
						) : (
							<Loading />
						)}
						<span className='mt-2 text-base leading-normal'>Blog Banner</span>
					</div>
					<div className='flex flex-col space-y-1'>
						<label
							for='blogName'
							className='text-sm font-semibold text-black text-left'>
							Blog Title
						</label>
						<input
							id='blogName'
							label='blogName'
							name='blogName'
							{...register("blogName", { required: true })}
							autofocus
							className='m-0 px-4 py-2 transition duration-300 border border-black rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200'
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
						type='submit'
						className='m-0 w-full px-4 py-2 text-lg text-white transition-colors duration-300 bg-red-500 rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-blue-200 focus:ring-4'>
						Post Blog
					</button>
				</form>
			</div>

			<div>{submitting ? <Loading /> : ""}</div>

			<BlogList />
		</div>
	);
};

export default PostBlog;
