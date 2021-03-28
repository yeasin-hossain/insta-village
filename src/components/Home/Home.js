import React, { useState } from 'react';
import NewsFeed from './NewsFeed/NewsFeed';
import Axios from 'axios';
function Home() {
	const [proImage, setProImage] = useState([]);
	const [uploadedImg, setUploadedImg] = useState('');
	const uploadImg = async (e) => {
		const fromData = new FormData();
		fromData.append('file', proImage);
		fromData.append('upload_preset', 'hdi4yfju');
		const upImg = await Axios.post(
			'https://api.cloudinary.com/v1_1/shantoxdp/image/upload',
			fromData
		);
		const secure_url = await upImg.data.secure_url;
		console.log(secure_url);
		setUploadedImg(secure_url);
	};
	return (
		<div>
			<NewsFeed />

			<input type="file" onChange={(e) => setProImage(e.target.files[0])} />
			<br />
			<br />
			<button type="submit" onClick={() => uploadImg()}>
				Upload
			</button>
			<img src={uploadedImg} alt="" />
		</div>
	);
}

export default Home;
