import React, { useEffect, useState } from "react";

const Bestperformer = () => {
	const [performer, setPerformer] = useState([]);
	useEffect(() => {
		fetch(
			"https://fierce-caverns-90976.herokuapp.com/teachersDashboard/bestPerformer?performer=best",
		)
			.then((res) => res.json())
			.then((data) => setPerformer(data));
	}, []);

	return (
		<div className='performer-container'>
			<h1 className='text-center text-3xl uppercase font-semibold pt-4 md:mb-9 mb-5 text-red-500'>
				Top Teacher Of The Year
			</h1>
			<div className='container mx-auto'>
				{performer?.map((best, key) => (
					<div key={key} className='px-4 font-bold'>
						<img
							style={{ width: "230px", height: "auto" }}
							className='mx-auto shadow-md rounded-md'
							src={best?.image}
							alt='best Performer'
						/>
						<div className='mt-4'>
							<h2 className='text-4xl text-red-500'> {best?.name}</h2>
							<p className='text-lg'>{best?.designation}</p>
							<p className='text-lg'>{best?.email}</p>
							<p className='text-lg'>Country: {best?.country}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Bestperformer;
