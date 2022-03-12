import React from "react";
import { Button } from "../global/button";
import * as Icon from "react-feather";

const index: React.FC = () => {
	return (
		<div
			className="flex-space-between p-md fixed-top nav-bg"
			style={{
				paddingTop: "30px",
			}}
		>
			<div className="container-sm">
				<Button>
					<Icon.AlignLeft color="#fff" />
				</Button>
			</div>
			<div className="container-sm flex-end gap-md">
				<Button type="primary">
					<Icon.User color="#000" />
				</Button>
				<Button type="secondary">
					<Icon.Search color="#fff" />
				</Button>
			</div>
		</div>
	);
};

export default index;
