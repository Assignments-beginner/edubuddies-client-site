import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const CoreFeatures = () => {
	return (
		<div className='container mx-auto my-24  px-4 md:px-11  '>
			<div className='grid md:grid-cols-2 grid-cols-1 mx-auto md:gap-5 gap-4'>
				<div className='w-full'>
					<div className='md:text-3xl text-2xl font-black text-blue-700 md:text-left text-center'>
						CORE FEATURES
					</div>
					<h1 className='md:text-5xl text-4xl font-semibold my-4 text-blue-700  md:text-left text-center'>
						See What Our Mission Are
					</h1>
					<div className='flex py-5 align-middle justify-items-start  duration-300 rounded-md '>
						<div className='mr-3 p-5 bg-blue-600 text-white rounded-md'>
							<FontAwesomeIcon
								className=' icon '
								style={{ fontSize: "60px" }}
								icon={faDatabase}
							/>
						</div>
						<div className=' text-left'>
							<div className='md:text-2xl text-xl font-bold mb-1 text-blue-700'>
								Learn Data Science
							</div>
							<div className='text-base'>
								Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula
								consectetur dignissim dictum.
							</div>
						</div>
					</div>
					<div className='flex py-5 align-middle justify-items-start  duration-300 rounded-md '>
						<div className='mr-3 p-5 bg-blue-600 text-white rounded-md'>
							<FontAwesomeIcon
								className=' icon'
								style={{ fontSize: "60px" }}
								icon={faDatabase}
							/>
						</div>
						<div className='text-left'>
							<div className='md:text-2xl text-xl font-bold mb-1 text-blue-700'>
								Best Online Class
							</div>
							<div className='text-base'>
								Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula
								consectetur dignissim dictum.
							</div>
						</div>
					</div>
					<div className='flex py-5 align-middle justify-items-start  duration-300 rounded-md '>
						<div className='mr-3 p-5 bg-blue-600 text-white rounded-md'>
							<FontAwesomeIcon
								className=' icon'
								style={{ fontSize: "60px" }}
								icon={faDatabase}
							/>
						</div>
						<div className='text-left'>
							<div className='md:text-2xl text-xl font-bold mb-1 text-blue-700'>
								24x7 Program
							</div>
							<div className='text-base'>
								Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula
								consectetur dignissim dictum.
							</div>
						</div>
					</div>
				</div>
				<div>
					<img
						style={{ width: "100%", height: "100%" }}
						src='https://shivaaythemes.in/educater-html/assets/images/course-3.jpg'
						alt=''
					/>
				</div>
			</div>
		</div>
	);
};

export default CoreFeatures;
