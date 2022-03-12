import React from "react";

interface Props {
	type?: "primary" | "secondary";
	size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}
export const Button: React.FC<Props> = ({ children, type, size = "xs" }) => {
	return (
		<button
			className={`button button-solid-${size} flex-center p-sm`}
			style={
				type === "primary"
					? {
							color: "#000",
							background: "#FCD7C5",
					  }
					: type === "secondary"
					? {
							color: "#fff",
							background: "#3B1CFF",
					  }
					: {}
			}
		>
			{children}
		</button>
	);
};
