import React, { useState } from "react";

const Test = () => {
	const [length, setLength] = useState(0);
	const [array, setArray] = useState([]);
	const [nums, setNums] = useState([]);
	const handleClick = (n) => {
		const nn = [...nums, n];
		if (nn.length - 1 < length) {
			setNums(nn);
		}
	};
	const show = () => {
		setArray([...new Set(nums)]);
	};
	const print = () => {};

	return (
		<div className='conatiner'>
			<input
				id='Title'
				placeholder='Enter Length'
				label='Title'
				name='Title'
				autofocus
				className='mt-3 mx-1 m-0 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
				onChange={(e) => setLength(e.target.value)}
			/>
			<div className='w-1/5  mx-auto'>
				<div className='grid grid-cols-5'>
					{Array.from({ length: 30 }).map((_, idx) => (
						<>
							{nums?.includes(idx + 1) ? (
								<button
									onClick={() => handleClick(idx + 1)}
									className='bg-black m-2 rounded-full text-white'>
									{idx + 1}
								</button>
							) : (
								<button
									onClick={() => handleClick(idx + 1)}
									className='bg-red-500 m-2 rounded-full text-white'>
									{idx + 1}
								</button>
							)}
						</>
					))}
				</div>
			</div>
			<div className='border-t border-red-5'></div>
			<button
				onClick={() => show()}
				className='bg-red-500 m-2 p-4 rounded text-white'>
				View
			</button>
			<div className='border-t border-red-5'></div>

			<div className='w-1/5  mx-auto'>
				<div className='grid grid-cols-5' id='print'>
					{Array.from({ length: 30 }).map((_, idx) => (
						<>
							{array?.includes(idx + 1) ? (
								<button className='bg-black m-2 border-2 rounded-full text-black'>
									&nbsp;
								</button>
							) : (
								<button className='bg-white m-2 border-2 rounded-full text-white'>
									&nbsp;
								</button>
							)}
						</>
					))}
				</div>
			</div>
			<button
				onClick={() => print()}
				className='bg-red-500 m-2 p-4 rounded text-white'>
				Print
			</button>
		</div>
	);
};

export default Test;
