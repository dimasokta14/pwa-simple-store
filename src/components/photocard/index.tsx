import React from "react";
import "./style.scss";

interface Props {
	src: string;
}

const index: React.FC<Props> = ({ src }) => {
	return (
		<div
			className="photo-wrapper"
			style={{
				backgroundImage: `url(${src})`,
				backgroundSize: "cover",
				maxWidth: "150px",
				height: "150px",
			}}
		/>
	);
};

export default index;
