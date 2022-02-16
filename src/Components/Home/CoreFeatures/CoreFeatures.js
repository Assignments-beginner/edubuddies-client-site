import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUserGraduate,
	faChalkboardUser,
	faTableList,
} from "@fortawesome/free-solid-svg-icons";

const CoreFeatures = () => {
	return (
		<div className='bg-gray-900 my-24 '>
			<div className=' mx-auto  pl-0 md:pl-11'>
				<div className='grid md:grid-cols-2 grid-cols-1 mx-auto md:gap-5 gap-4'>
					<div className=' py-9   px-4 md:px-8 '>
						<div className='md:text-2xl text-1xl font-black text-red-500 md:text-left text-center'>
							CORE FEATURES
						</div>
						<h1 className='md:text-4xl text-3xl font-semibold my-4 text-white  md:text-left text-center'>
							See What Our Mission Are
						</h1>
						<div className='flex py-5 align-middle justify-items-start  duration-300 rounded-md '>
							<div
								className='mr-5 p-5 bg-purple-800 text-white rounded-md my-auto'
								style={{ maxHeight: 100 }}>
								<FontAwesomeIcon
									className=' icon '
									style={{ fontSize: "35px" }}
									icon={faUserGraduate}
								/>
							</div>
							<div className=' text-left my-auto'>
								<div className='md:text-2xl text-xl font-bold mb-2 text-white'>
									Learn Data Science
								</div>
								<div className='text-sm text-white'>
									Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula
									consectetur dignissim dictum.
								</div>
							</div>
						</div>
						<div className='flex py-5 align-middle justify-items-start  duration-300 rounded-md '>
							<div
								className='mr-5 px-3.5 py-5 bg-blue-800 text-white rounded-md  my-auto'
								style={{ maxHeight: 100 }}>
								<FontAwesomeIcon
									className=' icon'
									style={{ fontSize: "35px" }}
									icon={faChalkboardUser}
								/>
							</div>
							<div className='text-left my-auto'>
								<div className='md:text-2xl text-xl font-bold mb-2 text-white'>
									Best Online Class
								</div>
								<div className='text-sm text-white'>
									Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula
									consectetur dignissim dictum.
								</div>
							</div>
						</div>
						<div className='flex py-5 align-middle justify-items-start  duration-300 rounded-md '>
							<div
								className='mr-5 p-5 bg-indigo-800 text-white rounded-md  my-auto'
								style={{ maxHeight: 100 }}>
								<FontAwesomeIcon
									className=' icon'
									style={{ fontSize: "35px" }}
									icon={faTableList}
								/>
							</div>
							<div className='text-left my-auto'>
								<div className='md:text-2xl text-xl font-bold mb-2 text-white'>
									24x7 Program
								</div>
								<div className='text-sm text-white'>
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
			</div>{" "}
		</div>
	);
};

export default CoreFeatures;
