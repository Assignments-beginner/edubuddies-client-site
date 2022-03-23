import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrashCan,
	faXmark,
	faCheck,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Swal from "sweetalert2";
import LoadingOverlay from "../Loading/LoadingOverlay";

const BlogList = () => {
	const [deleted, setDeleted] = React.useState(false);
	const [status, setStatus] = React.useState(false);
	const [allBlogs, setAllBlogs] = React.useState();
	React.useEffect(() => {
		axios
			.get(`https://fierce-caverns-90976.herokuapp.com/blogs`)
			.then((res) => {
				setAllBlogs(res.data);
			});
	}, [deleted, status]);

	const handleDelete = (id) => {
		setDeleted(true);
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axios
					.delete(`https://fierce-caverns-90976.herokuapp.com/blogs/${id}`)
					.then(function(response) {
						Swal.fire("Deleted!", "That blog has been deleted.", "success");
						setDeleted(false);
					})
					.catch(function(error) {
						console.log(error);
					});
			}
		});
	};

	const handleStatus = (id, text, mark) => {
		setStatus(true);
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: `Yes, ${text} it!`,
		}).then((result) => {
			if (result.isConfirmed) {
				axios
					.put(`https://fierce-caverns-90976.herokuapp.com/blogStatus/${id}`, {
						text: text,
					})
					.then(function(response) {
						Swal.fire(`${text}!`, "That blog has been approved.", `${mark}`);
						setStatus(false);
					})
					.catch(function(error) {
						console.log(error);
					});
			}
		});
	};
	let n = 1;

	return (
		<div className='container mx-auto px-4 md:px-9'>
			<div className='mb-8 mt-4'>
				<h3 className='text-3xl font-semibold text-center text-red-500'>
					All Blogs
				</h3>
			</div>
			<div className='flex flex-col'>
				<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
						<div className='shadow overflow-hidden border-b border-red-200 sm:rounded-lg tables'>
							<table className='min-w-full divide-y divide-red-200'>
								<thead className='bg-slate-900 font-bold'>
									<tr>
										<th
											scope='col'
											className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
											No
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
											Publisher
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
											Blog Title
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
											Blog Status
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
											Action
										</th>
									</tr>
								</thead>

								<tbody className='bg-white divide-y divide-red-200'>
									{allBlogs?.map((blog, key) => (
										<tr key={key}>
											<td className='px-6 py-3 whitespace-nowrap text-center'>
												{n++}
											</td>
											<td className='px-6 py-3 whitespace-nowrap text-center'>
												{blog?.publisher}
											</td>
											<td className='px-6 py-3 whitespace-nowrap text-center'>
												{blog?.blogName}
											</td>
											{`${blog?.blogStatus}` === "Denied" && (
												<td className='px-6 py-3 whitespace-nowrap text-center'>
													<p className='text-center text-white rounded-lg bg-red-500 w-[100px] mx-auto'>{`${blog?.blogStatus}`}</p>
												</td>
											)}
											{`${blog?.blogStatus}` === "Approved" && (
												<td className='px-6 py-3 whitespace-nowrap text-center'>
													<p className='text-center text-white rounded-lg bg-green-600 w-[100px] mx-auto'>{`${blog?.blogStatus}`}</p>
												</td>
											)}
											{`${blog?.blogStatus}` === "Pending" && (
												<td className='px-6 py-3 whitespace-nowrap text-center'>
													<p className='text-center text-white rounded-lg bg-yellow-400 w-[100px] mx-auto'>{`${blog?.blogStatus}`}</p>
												</td>
											)}

											<td className='px-6 py-3 whitespace-nowrap text-center'>
												<FontAwesomeIcon
													onClick={() =>
														handleStatus(blog?._id, "Approved", "success")
													}
													icon={faCheck}
													className='text-2xl mx-2 hover:text-red-500 cursor-pointer'
												/>
												<FontAwesomeIcon
													onClick={() =>
														handleStatus(blog?._id, "Denied", "error")
													}
													icon={faXmark}
													className='text-2xl mx-2 hover:text-red-500 cursor-pointer'
												/>
												<FontAwesomeIcon
													onClick={() => handleDelete(blog?._id)}
													icon={faTrashCan}
													className='text-2xl mx-2 hover:text-red-500 cursor-pointer text-red-600'
												/>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			{!allBlogs && <LoadingOverlay />}
		</div>
	);
};

export default BlogList;
