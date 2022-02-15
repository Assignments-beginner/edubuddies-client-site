import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPhone,
	faLocationDot,
	faEnvelope,
	faClock,
} from "@fortawesome/free-solid-svg-icons";

const InfoCard = () => {
	return (
		<div className='container mx-auto  px-4 md:px-11  mb-7 relative z-10 '>
			<div className='mx-auto grid grid-cols-12 gap-5 bg-gray-800  text-white '>
				<div className='md:col-span-3 col-span-12 text-center p-2'>
					<div className=' md:border-r-2 md:border-b-0 border-b-2 border-red-600'>
						<FontAwesomeIcon
							style={{ fontSize: "40px" }}
							className='my-3'
							icon={faPhone}
						/>
						<h2 className='text-md my-1'>(04) 495-9400</h2>
						<h2 className='text-md my-1'>1-800-544-2787</h2>
					</div>
				</div>
				<div className='md:col-span-3 col-span-12 text-center p-2'>
					<div className=' md:border-r-2 md:border-b-0  border-b-2 border-red-600'>
						<FontAwesomeIcon
							style={{ fontSize: "40px" }}
							className='my-3'
							icon={faLocationDot}
						/>
						<h2 className='text-md my-1'>A26BT5 BUILDING</h2>
						<h2 className='text-md my-1'>LONDON, ENGLAND</h2>
					</div>
				</div>
				<div className='md:col-span-3 col-span-12 text-center p-2'>
					<div className=' md:border-r-2 md:border-b-0  border-b-2 border-red-600'>
						<FontAwesomeIcon
							style={{ fontSize: "40px" }}
							className='my-3'
							icon={faEnvelope}
						/>
						<h2 className='text-md my-1'>SUPPORT</h2>
						<h2 className='text-md my-1'>edubuddies@gmail.com</h2>
					</div>
				</div>
				<div className='md:col-span-3 col-span-12 text-center p-2'>
					<div className=' md:border-r-0 md:border-b-0 border-b-2 border-red-600'>
						<FontAwesomeIcon
							style={{ fontSize: "40px" }}
							className='my-3'
							icon={faClock}
						/>
						<h2 className='text-md my-1'>DAILY: 10:00 AM - 5:00 PM</h2>
						<h2 className='text-md my-1'>MONDAY & HOLIDAYS: CLOSED</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InfoCard;
