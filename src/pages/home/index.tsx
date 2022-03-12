import React from "react";
import { PhotoContainer } from "../../components/Home/photoContainer";
import Title from "../../components/Home/title";

const index: React.FC = () => {
	return (
		<div className="p-lg">
			<Title />
			<PhotoContainer />
		</div>
	);
};

export default index;
