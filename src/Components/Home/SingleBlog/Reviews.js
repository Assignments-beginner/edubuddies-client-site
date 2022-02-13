import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
	const blogs = [
		{
			name: "John doe",
			photo:
				"https://eduma.thimpress.com/demo-1/wp-content/uploads/sites/89/2015/11/team-5-100x100.jpg",
			comment:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam omnis iure adipisci voluptas suscipit, iusto corporis ut doloremque inventore quisquam!",
			date: "19/01/20",
		},
		{
			name: "John doe",
			photo:
				"https://eduma.thimpress.com/demo-1/wp-content/uploads/sites/89/2015/11/team-5-100x100.jpg",
			comment:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam omnis iure adipisci voluptas suscipit, iusto corporis ut doloremque inventore quisquam!",
			date: "19/01/20",
		},
		{
			name: "John doe",
			photo:
				"https://eduma.thimpress.com/demo-1/wp-content/uploads/sites/89/2015/11/team-5-100x100.jpg",
			comment:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam omnis iure adipisci voluptas suscipit, iusto corporis ut doloremque inventore quisquam!",
			date: "19/01/20",
		},
		{
			name: "John doe",
			photo:
				"https://eduma.thimpress.com/demo-1/wp-content/uploads/sites/89/2015/11/team-5-100x100.jpg",
			comment:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam omnis iure adipisci voluptas suscipit, iusto corporis ut doloremque inventore quisquam!",
			date: "19/01/20",
		},
	];
	return (
		<div>
			<h1 className='md:text-5xl text-4xl  md:text-left text-center font-semibold py-5 text-blue-700'>
				Comments
			</h1>
			<div className='w-full'>
				{blogs?.map((blog, key) => (
					<>
						{" "}
						<div
							key={key}
							className='grid grid-cols-8  mx-auto gap-5 align-center py-2'>
							<div className='col-span-2'>
								<img
									className='w-full card-image rounded-lg'
									src={blog?.photo}
									alt=''
								/>
							</div>
							<div className='col-span-6'>
								<h1 className='text-3xl font-bold text-stone-700 duration-300 cursor-pointer text-left'>
									{blog?.name}
								</h1>
								<h3 className='text-md  text-stone-700 duration-300 cursor-pointer text-left'>
									{blog?.comment}
								</h3>
								<div>
									<div className=' text-stone-500 text-md mt-2'>
										<div className='text-left'>
											<FontAwesomeIcon
												className='mr-1 text-blue-500'
												icon={faCalendarAlt}
											/>
											<span>{blog?.date}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='border border-black-100 my-2'></div>
					</>
				))}
			</div>
		</div>
	);
};

export default Reviews;
