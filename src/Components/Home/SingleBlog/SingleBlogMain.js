import React, { useState } from "react";
import AddReview from "./AddReview";
import RecentBlogs from "./RecentBlogs";
import Reviews from "./Reviews";
import SingleBlog from "./SingleBlog";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleBlogMAin = () => {
	const [submitting, setSubmitting] = useState(false);
	const { id } = useParams();
	const [blog, setBlog] = React.useState();
	React.useEffect(() => {
		axios
			.get(`https://fierce-caverns-90976.herokuapp.com/blogs/${id}`)
			.then((res) => {
				setBlog(res.data);
			});
	}, [id, submitting]);

	return (
		<div className='container mx-auto my-9  px-4 md:px-11  '>
			<div className='container flex flex-col sm:flex-row justify-evenly'>
				<div className='md:w-7/12 w-full'>
					<SingleBlog blog={blog} />
					<AddReview
						setSubmitting={setSubmitting}
						submitting={submitting}
						blog={blog}
					/>
					<Reviews blog={blog} />
				</div>
				<div className='md:w-4/12 w-full'>
					<RecentBlogs blog={blog} />
				</div>
			</div>
		</div>
	);
};

export default SingleBlogMAin;
