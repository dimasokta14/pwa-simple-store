import React from "react";
import PhotoCard from "../photocard";
import "./style.scss";

export const PhotoContainer: React.FC = () => {
	return (
		<div className="photo-auto-grid">
			<PhotoCard src="https://picsum.photos/seed/picsum/100/100" />
			<PhotoCard src="https://picsum.photos/seed/mountain/100/100" />
			<PhotoCard src="https://picsum.photos/seed/sea/100/100" />
		</div>
	);
};
