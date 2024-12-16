import React from "react";
import brain from "../assets/brain.svg";
import { Button } from "antd";
Button;
import { GithubOutlined } from "@ant-design/icons";
import { Color } from "../assets/color";

const HeaderMessage = () => {
	return (
		<div
			style={{
				padding: "10px",
				marginBottom: "20px",
				backgroundColor: Color.receive,
				fontSize: "16px",
				borderRadius: "10px",
			}}
		>
			<div
				style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
			>
				<img
					src={brain}
					alt="icon"
					style={{ width: "30px", height: "30px", borderRadius: "50%" }}
				/>
				<span
					style={{ marginLeft: "10px", fontWeight: "bolder", fontSize: "24px" }}
				>
					Đồ án báo cáo cuối kỳ
				</span>
			</div>

			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					marginBottom: "5px",
				}}
			>
				<div
					style={{
						backgroundColor: "transparent",
						padding: "10px",
						borderRadius: "5px",
					}}
				>
					Phân tích cảm xúc Tiếng Việt trên bộ dữ liệu Code-mix Hotel Review.
				</div>
			</div>
		</div>
	);
};

export default HeaderMessage;
