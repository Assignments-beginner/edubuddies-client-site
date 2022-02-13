import React from "react";
import RecentBlogs from "./RecentBlogs";
import SingleBlog from "./SingleBlog";

const SingleBlogMAin = () => {
	return (
		<div className='container mx-auto my-14  px-4 md:px-11  '>
			<div className='mx-auto grid grid-cols-12 gap-7'>
				<div className='md:col-span-8 col-span-12'>
					<SingleBlog />
				</div>
				<div className='md:col-span-4 col-span-12'>
					<RecentBlogs />
				</div>
			</div>
		</div>
	);
};

export default SingleBlogMAin;
