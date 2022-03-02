import React, { useState } from "react";
import axios from "axios";
import { BlobServiceClient } from "@azure/storage-blob";
import "./test.css";

const Test = () => {
	const blobSasUrl =
		"https://teamssyaan.blob.core.windows.net/?sv=2020-08-04&ss=b&srt=sco&sp=rwdlacitfx&se=2022-02-24T21:53:40Z&st=2022-02-24T13:53:40Z&spr=https&sig=Wx4uO7vu7go5D14GCYxzYer7ylMIhQQL7OkfNED4vCM%3D";
	const blobServiceClient = new BlobServiceClient(blobSasUrl);

	const [form, setForm] = useState({
		title: "",
		description: "",
		file: null,
		image: "",
		price: 0,
		category: "",
	});
	const handleChange = (e) => {
		const value = e.target.name === "file" ? e.target.files[0] : e.target.value;
		setForm({
			...form,
			[e.target.name]: value,
		});
	};

	const handleForm = (e) => {
		e.preventDefault();
		console.log(form);
		form.owner = { email: "nizamcse.seu@gmail.com", name: "Nizam Uddin" };
		form.data = [];
		form.enrolledStudents = [];
		axios
			.post("https://fierce-caverns-90976.herokuapp.com/addCourse", form)
			.then((res) => {
				console.log(res.data);
			});
	};

	const showFileDialog = () => {
		uploadFiless();
	};

	const uploadFiless = async () => {
		console.log(form.file);
		try {
			console.log("uploadding");
			console.log(form.file.name);
			const containerClient = blobServiceClient.getContainerClient("courses");
			const blockBlobClient = containerClient.getBlockBlobClient(
				form.file.name,
			);
			const rest = await blockBlobClient.uploadBrowserData(form.file);
			console.log(rest);
			const resURL = rest?._response?.request?.url;
			console.log(resURL.split("?")[0]);
			console.log("Done");
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div>
			<h1>This is Testing Component</h1>
			<form onSubmit={handleForm}>
				<input
					onChange={handleChange}
					type='text'
					name='title'
					placeholder='Title'
				/>{" "}
				<br /> <br />
				<input
					onChange={handleChange}
					type='text'
					name='category'
					placeholder='Category'
				/>{" "}
				<br /> <br />
				<input
					onChange={handleChange}
					type='text'
					name='image'
					placeholder='image'
				/>{" "}
				<br /> <br />
				<input
					onChange={handleChange}
					type='number'
					name='price'
					placeholder='Price'
				/>{" "}
				<br /> <br />
				<textarea
					onChange={handleChange}
					type='text'
					name='description'
					placeholder='Description'
				/>{" "}
				<br /> <br />
				{/* <input
          onChange={handleChange}
          type="file"
          name="file"
          // accept="video/mp4"
          placeholder="Upload A Video"
        />{" "} */}
				<br /> <br />
				<input type='submit' />
			</form>

			{/* <button onClick={() => showFileDialog()}>
        Click here to Upload File
      </button> */}
		</div>
	);
};

export default Test;
