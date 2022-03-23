import axios from "axios";
import Swal from "sweetalert2";

export const deleteAlert = (id, api) => {
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
				.delete(`https://fierce-caverns-90976.herokuapp.com/${api}/${id}`)
				.then((res) => {
					if (res.data.deletedCount > 0) {
						Swal.fire({
							showConfirmButton: false,
							icon: "success",
							title: "Your file has been deleted",
							timer: 1000,
						});
					}
				});
		}
	});
};

export const updateAlert = (id, statusName, api) => {
	const status = {
		statusName: statusName,
	};
	console.log(status);
	Swal.fire({
		title: "Are you sure?",
		text: `You won't be able ${statusName} this!`,
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "green",
		cancelButtonColor: "red",
		confirmButtonText: `Yes, I am sure`,
	}).then((result) => {
		if (result.isConfirmed) {
			axios
				.patch(
					`https://fierce-caverns-90976.herokuapp.com/${api}/${id}`,
					status,
				)
				.then((res) => {
					if (res.data.modifiedCount > 0) {
						Swal.fire({
							position: "center",
							icon: "success",
							title: "Successfully Done",
							showConfirmButton: false,
							timer: 1500,
						});
					}
				});
		}
	});
};
