import React from "react";
import ReactPlayer from "react-player";
import "./SingleCourse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const SingleCourse = () => {
	return (
		<div className='container mx-auto my-9  px-4 md:px-11 '>
			<div className='mx-auto grid grid-cols-12 gap-9'>
				<div className='md:col-span-8 col-span-12'>
					<h1 className='text-left text-3xl uppercase mb-5 font-semibold text-red-500'>
						Web Development Batch 4
					</h1>
					<ReactPlayer
						width='100%'
						url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
					/>
					<h1 className='text-left text-xl uppercase mt-5 font-semibold text-red-500'>
						Video Title Video Title Video Title
					</h1>
				</div>
				<div className='md:col-span-4 col-span-12'>
					<h1 className='text-left text-xl uppercase mb-5 font-semibold text-red-500'>
						Course Contents
					</h1>
					<div
						class='accordion '
						style={{ maxHeight: "60vh", overflowY: "scroll" }}>
						{Array.from({ length: 8 }).map((_, idx) => (
							<div>
								<input
									type='checkbox'
									name='panel'
									id='panel-1'
									class='hidden'
								/>
								<label
									for='panel-1'
									class='relative block bg-gray-800 text-white p-4 shadow border-b border-grey'>
									Milestone 1
								</label>
								<div class='accordion__content overflow-hidden bg-grey-lighter'>
									{Array.from({ length: 4 }).map((_, idx) => (
										<h2 class='accordion__header p-3 border-2 font-semibold border-black'>
											<FontAwesomeIcon
												className='text-gray-800 icon mr-3 '
												icon={faPlay}
											/>
											Welcome To Our Video 1
										</h2>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleCourse;
