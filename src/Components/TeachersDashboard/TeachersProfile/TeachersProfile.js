import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useParams } from "react-router-dom";

const TeachersProfile = () => {
	const { id } = useParams();
	const [singleTeacher, setSingleTeacher] = useState({});

	useEffect(() => {
		fetch(`https://fierce-caverns-90976.herokuapp.com/singleTeacher/${id}`)
			.then((res) => res.json())
			.then((data) => setSingleTeacher(data));
	}, [id]);
	console.log("singleTeacher", singleTeacher);
	return (
		<div className=' container mt-4 mx-auto'>
			<div className='xl:flex lg:flex: md:flex sm:block flex-row'>
				<div className='basis-2/5 text-left border rounded-md mb-4 mx-4 shadow-md'>
					<img
						style={{ width: "100%" }}
						className='rounded-t-md'
						src={singleTeacher?.photoURL}
						alt='Teachers'
					/>
					<div className='flex justify-between items-center border-b-2 border-red-500 px-5 py-2 bg-gray-800 font-bold tracking-widest'>
						<h4 className='text-lg text-red-500'>
							{singleTeacher?.displayName}
						</h4>
						<h4 className='text-white'>{singleTeacher?.designation}</h4>
					</div>
					<div className='pl-5 pr-3 text-lg pt-2 pb-7'>
						<h4>
							<span className='font-bold'>Email:</span> {singleTeacher?.email}
						</h4>
						<h4>
							<span className='font-bold'>Phone:</span> {singleTeacher?.phone}
						</h4>
						<h4>
							<span className='font-bold'>Age:</span> {singleTeacher?.age}
						</h4>
						<h4>
							<span className='font-bold'>Gender:</span> {singleTeacher?.gender}
						</h4>
						<h4>
							<span className='font-bold'>Address:</span>{" "}
							{singleTeacher?.address}
						</h4>
					</div>
				</div>
				<div className='basis-4/5 mx-4 border rounded-md shadow-md pb-5 mb-8'>
					<h4 className='text-left text-2xl p-5 font-semibold '>
						<span>
							<span>About Of</span>
							{"  "}
							<span className='text-red-500 text-3xl'>
								{singleTeacher?.displayName}
							</span>
						</span>
					</h4>
					<hr />
					<div className='pl-5 text-left'>
						<p className='text-gray-500 my-4 tracking-wider'>
							{singleTeacher?.about}
						</p>
						<h2 className='text-2xl font-bold'>Skills</h2>
						<h4 className='my-6'>
							{singleTeacher?.skills?.split(",")?.map((expert, key) => (
								<p
									className='mr-4 bg-gray-800 text-white py-2 px-4 rounded-md inline-block mb-2'
									key={key}>
									{expert}
								</p>
							))}
						</h4>
						<h2 className='text-2xl font-bold'>Language</h2>
						<h4 className='my-6'>
							{singleTeacher?.language?.split(",")?.map((lang, key) => (
								<p
									className='mr-4 bg-gray-800 py-2 px-4 text-white rounded-md inline-block mb-2'
									key={key}>
									{lang}
								</p>
							))}
						</h4>
						<h2 className='text-lg mb-2'>
							<span className='font-bold'>Experience: </span>
							{singleTeacher?.experinece} Years
						</h2>
						<h2 className='text-lg mb-2'>
							<span className='font-bold'>Operation Done: </span>
							<CountUp
								start={0}
								end={singleTeacher?.operationDone}
								duration={4.25}
							/>
						</h2>
						<h2 className='text-lg mb-2'>
							<span className='font-bold'>Join Date: </span> 10-February-2020
						</h2>
						<h2 className='text-lg mb-4'>
							<span className='font-bold'>Job Type: </span>
							{singleTeacher?.type}
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeachersProfile;
