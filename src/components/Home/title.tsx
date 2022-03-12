import React, { useEffect, useState } from "react";
import "./style.scss";
import { BaliIcon } from "../../utils/customIcon";
import { Button } from "../global/button";
import * as Icon from "react-feather";

const Title: React.FC = () => {
	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) =>
			console.log(position.coords)
		);
	}, []);
	return (
		<div className="flex-space-between-column gap-sm">
			<img src={BaliIcon} />
			<div className="main-title-wrapper">
				<h2 className="title">because</h2>
				<h2 className="title-city-name">bali</h2>
				<h2 className="title">is always a good idea</h2>
			</div>
			<div
				className="flex-space-between"
				style={{
					width: "100%",
				}}
			>
				<p className="title-sub">
					There is no other place like Bali in this world. Just enjoy it!
				</p>
				<Button type="primary">
					<Icon.ArrowRight color="#000" />
				</Button>
			</div>
		</div>
	);
};

export default Title;
