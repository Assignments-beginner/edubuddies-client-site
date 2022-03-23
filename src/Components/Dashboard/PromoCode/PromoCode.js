import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrashCan,
	faXmark,
	faCheck,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";
import PromoModal from "./PromoModal";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const PromoCode = () => {
	const [showPromoModal, setShowPromoModal] = React.useState(false);
	const [status, setStatus] = React.useState(false);
	const [deleted, setDeleted] = React.useState(false);
	const { user } = useAuth();
	const [promo, setPromo] = React.useState();
	React.useEffect(() => {
		axios
			.get(`https://fierce-caverns-90976.herokuapp.com/promo`)
			.then((res) => {
				setPromo(res.data);
			});
	}, [deleted, showPromoModal, status]);
	console.log(promo);

	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axios
					.delete(`https://fierce-caverns-90976.herokuapp.com/promo/${id}`)
					.then(function(response) {
						Swal.fire("Deleted!", "That promo has been deleted.", "success");
						setDeleted(true);
					})
					.catch(function(error) {
						console.log(error);
					});
			}
		});
	};
	const handleStatus = (id, text, mark) => {
		setStatus(true);
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: `Yes, ${text} it!`,
		}).then((result) => {
			if (result.isConfirmed) {
				axios
					.put(`https://fierce-caverns-90976.herokuapp.com/promo/${id}`, {
						text: text,
					})
					.then(function(response) {
						Swal.fire(`${text}!`, `That promo is ${text}.`, `${mark}`);
						setStatus(false);
					})
					.catch(function(error) {
						console.log(error);
					});
			}
		});
	};
	let n = 1;

	return (
		<div className='container mx-auto px-4 md:px-11'>
			<div className='p-5 border-b border-solid border-red-500 rounded-t mb-5'>
				<div className='mb-2 mt-7 flex justify-between'>
					<h3 className='text-3xl font-semibold text-center text-red-500'>
						Promo Codes
					</h3>
					<div className='flex align-center text-red-500'>
						<span className='mr-2'>Add New Promo</span>
						<FontAwesomeIcon
							onClick={() => setShowPromoModal(true)}
							icon={faPlus}
							className='text-2xl sm:mr-9 mr-0 cursor-pointer'
						/>
					</div>
				</div>
			</div>
			<div className='flex flex-col'>
				<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
						<div className='shadow overflow-hidden border-b border-red-200 sm:rounded-lg tables'>
							<table className='min-w-full divide-y divide-red-200'>
								<thead className='bg-slate-900 font-bold'>
									<tr>
										<th
											scope='col'
											className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
											No
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
											Promo Code
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
											Discount Percentage
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider'>
											Status
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider'>
											Action
										</th>
									</tr>
								</thead>
								{promo?.map((promoCode) => (
									<tbody className='bg-white divide-y divide-red-200'>
										<tr>
											<td className='px-6 py-3 whitespace-nowrap text-center'>
												{n++}
											</td>
											<td className='px-6 py-3 whitespace-nowrap text-center'>
												{promoCode?.promo}
											</td>
											<td className='px-6 py-3 whitespace-nowrap text-center'>
												{promoCode?.percent}
											</td>
											{`${promoCode?.status}` === "Disabled" && (
												<td className='whitespace-nowrap text-center'>
													<p className='text-center text-white rounded-lg bg-red-500 w-[90px] mx-auto'>{`${promoCode?.status}`}</p>
												</td>
											)}
											{`${promoCode?.status}` === "Pending" && (
												<td className='whitespace-nowrap text-center'>
													<p className='text-center text-black rounded-lg bg-yellow-400 w-[90px] mx-auto'>{`${promoCode?.status}`}</p>
												</td>
											)}
											{`${promoCode?.status}` === "Live" && (
												<td className='whitespace-nowrap text-center'>
													<p className='text-center text-white rounded-lg bg-green-600 w-[90px] mx-auto'>{`${promoCode?.status}`}</p>
												</td>
											)}
											<td className='whitespace-nowrap text-center'>
												<FontAwesomeIcon
													onClick={() =>
														handleStatus(promoCode?._id, "Live", "success")
													}
													icon={faCheck}
													className='text-2xl mx-2 hover:text-red-500 cursor-pointer'
												/>
												<FontAwesomeIcon
													onClick={() =>
														handleStatus(promoCode?._id, "Disabled", "error")
													}
													icon={faXmark}
													className='text-2xl mx-2 hover:text-red-500 cursor-pointer'
												/>
												<FontAwesomeIcon
													onClick={() => handleDelete(promoCode?._id)}
													icon={faTrashCan}
													className='text-2xl mx-2 hover:text-red-500 cursor-pointer text-red-500'
												/>
											</td>
										</tr>
									</tbody>
								))}
							</table>
						</div>
					</div>
				</div>
			</div>
			{showPromoModal ? (
				<>
					<PromoModal setShowPromoModal={setShowPromoModal} />
				</>
			) : null}
		</div>
	);
};

export default PromoCode;
