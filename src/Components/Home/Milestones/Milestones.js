import React from "react";
import ReactPlayer from "react-player";
import "./Milestones.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import axios from "axios";

const Milestones = () => {
	const { id } = useParams();

	const [files, setFiles] = React.useState();
	React.useEffect(() => {
		axios
			.get(`https://fierce-caverns-90976.herokuapp.com/courses/${id}`)
			.then((res) => {
				setFiles(res.data);
			});
	}, [id]);
	console.log(files);
	const [selectModule, setSelectModule] = React.useState(
		`${files?.data[0]?.lectureURL}`,
	);

	const datas = files?.data?.sort((a, b) =>
		a?.milestone?.split(" ")[1] > b?.milestone?.split(" ")[1] ? 1 : -1,
	);
	const filteredMilestones = datas?.filter(
		(v, i, a) => a.findIndex((t) => t.milestone === v.milestone) === i,
	);

	return (
		<div className='container mx-auto my-9  px-4 md:px-11 '>
			{files?._id ? (
				<div className='mx-auto grid grid-cols-12 gap-9'>
					<div className='md:col-span-8 col-span-12'>
						<h1 className='text-left text-3xl uppercase mb-3 font-semibold text-red-500'>
							{files?.category}
						</h1>
						<ReactPlayer
							className='border border-red-500'
							playing='true'
							controls='true'
							volume='1'
							width='100%'
							height='fit-content'
							url={selectModule}
						/>

						<h1 className='text-left text-xl uppercase mt-5 font-semibold text-red-500'>
							{files?.title}
						</h1>
					</div>
					<div className='md:col-span-4 col-span-12'>
						<h1 className='text-left text-xl uppercase mb-5 font-semibold text-red-500'>
							Course Contents
						</h1>
						<div
							className='accordion '
							style={{ maxHeight: "60vh", overflowY: "scroll" }}>
							{filteredMilestones?.map((modules, i) => (
								<div>
									<input
										type='checkbox'
										name='panel'
										id={i}
										className='hidden'
									/>
									<label
										for={i}
										className='relative block bg-gray-800 text-white p-4 shadow border-b border-grey'>
										{modules?.milestone}
									</label>
									<div className='accordion__content overflow-hidden bg-grey-lighter'>
										{files?.data
											?.filter(
												(lecture) => lecture?.milestone === modules?.milestone,
											)
											.map((video) => (
												<h2
													className='accordion__header p-3 border-2 font-semibold border-black'
													onClick={() => setSelectModule(video?.lectureURL)}>
													<FontAwesomeIcon
														className='text-gray-800 icon mr-3 '
														icon={faPlay}
													/>
													{video?.title}
												</h2>
											))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			) : (
				<Loading />
			)}
		</div>
	);
};

export default Milestones;
