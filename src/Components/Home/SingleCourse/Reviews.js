import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const Reviews = ({ sigleData }) => {
	return (
		<div className=' mt-7'>
			<div className='border border-black-100 my-2'></div>
			<div className='text-xl font-black text-red-500 md:text-left text-center'>
				Previous Students Experiance
			</div>
			<h1 className='md:text-3xl text-4xl font-semibold mt-3 mb-5 text-gray-800  md:text-left text-center'>
				Experiances
			</h1>
			{sigleData?.reviews?.length > 0 ? (
				<div className='w-full'>
					{sigleData?.reviews?.map((user, key) => (
						<>
							<div
								key={key}
								className='grid grid-cols-9  mx-auto gap-5 align-center py-2'>
								<div className='col-span-2'>
									<img
										className='w-full card-image rounded-lg border border-red-500'
										src={user?.photo}
										alt={user?.reviewer}
									/>
								</div>
								<div className='col-span-7 my-auto'>
									<h1 className='text-3xl font-bold text-red-500 duration-300 mb-2 cursor-pointer text-left'>
										{user?.reviewer}
									</h1>
									<h3 className='text-md  text-stone-700 duration-300 cursor-pointer text-left'>
										{user?.review}
									</h3>
									<div>
										<div className=' text-stone-500 text-md mt-2'>
											<div className='text-left'>
												<FontAwesomeIcon
													className='mr-1 text-red-500'
													icon={faCalendarAlt}
												/>
												<span>
													{new Date(user?.date)
														.toLocaleString("en-GB")
														.split(",")[0] || "N/A"}
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='border border-black-100 my-2'></div>
						</>
					))}
				</div>
			) : (
				<>
					<h1 className='md:text-xl text-4xl font-semibold text-red-500  md:text-left text-center'>
						No Experiance Yet
					</h1>
					<p className='md:text-left text-center'>
						Be the first one to add Experiance
					</p>
				</>
			)}
		</div>
	);
};

export default Reviews;
