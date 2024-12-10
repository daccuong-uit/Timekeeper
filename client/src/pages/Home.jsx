import React, { useState, useContext } from "react";
import { Layout, Button } from "antd";
import ChatMessage from "../components/ChatMessage";
import SendCM from "../components/SendCM";
import { ClearOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";
import HeaderMessage from "../components/HeaderMessage";
import { Color } from "../assets/color";

const { Header, Footer, Content } = Layout;

const Home = () => {
	const [inputText, setInputText] = useState("");
	const [messages, setMessages] = useState([]);
	const [isFocused, setIsFocused] = useState(false);
	const [loading, setLoading] = useState(false);

	const { send } = useContext(AppContext);

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			if (inputText.trim()) {
				const sentMessage = {
					text: inputText,
					type: "send",
				};
				setMessages((prevMessages) => [...prevMessages, sentMessage]);

				const jsonData = await send(inputText);

				const receivedMessage = {
					type: "receive",
					sentiment: jsonData.sentiment,
					explain: jsonData.explain,
				};
				setMessages((prevMessages) => [...prevMessages, receivedMessage]);

				setInputText("");
			}
		} catch (error) {
			toast.error(`An error occurred: ${error}`);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Layout style={{ height: "100vh", backgroundColor: "transparent" }}>
			<Header
				style={{
					height: "50px",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					backgroundColor: Color.receive,
				}}
			>
				<h1
					style={{
						margin: 0,
						fontSize: "18px",
						color: "black",
						fontWeight: "bold",
					}}
				>
					Sentiment Analysis
				</h1>
				<button
					style={{
						backgroundColor: "transparent",
						border: "1px solid transparent",
						borderRadius: "25px",
						padding: "5px 10px",
						cursor: "pointer",
						transition: "background-color 0.3s, border-color 0.3s",
						fontSize: "14px",
						fontWeight: "bold",
					}}
					onMouseEnter={(e) => {
						e.currentTarget.style.backgroundColor = "#ffffff";
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.backgroundColor = "transparent";
						e.currentTarget.style.borderColor = "transparent";
					}}
				>
					<ClearOutlined style={{ marginRight: "5px" }} />
					Clear
				</button>
			</Header>
			<Content style={{ padding: "20px", overflowY: "auto" }}>
				<div>
					<div style={{ margin: "0 auto", maxWidth: "720px" }}>
						<div style={{ display: "flex", justifyContent: "flex-start" }}>
							<HeaderMessage />
						</div>
						{messages.map((msg, index) => (
							<div
								key={index}
								style={{
									display: "flex",
									justifyContent:
										msg.type === "send" ? "flex-end" : "flex-start",
								}}
							>
								{msg.type === "send" ? (
									<SendCM sendMessage={msg.text} />
								) : (
									<ChatMessage
										icon="https://via.placeholder.com/30"
										sentiment={msg.sentiment}
										explain={msg.explain}
									/>
								)}
							</div>
						))}
					</div>
				</div>
			</Content>

			<Footer
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "white",
					border: `1px solid ${isFocused ? Color.send : Color.receivePlus}`,
					borderRadius: "25px",
					padding: "2px",
					width: "50%",
					margin: "0 auto",
					marginBottom: "15px",
					boxShadow: "none",
					position: "relative",
					height: `${isFocused ? "auto" : "50px"}`,
				}}
			>
				<TextArea
					placeholder="Nhập văn bản của bạn..."
					value={inputText}
					onChange={(e) => setInputText(e.target.value)}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					autoSize={{ minRows: 1, maxRows: 5 }}
					style={{
						border: "none",
						maxWidth: "90%",
						width: "90%",
						marginRight: "10px",
						padding: "15px",
						resize: "none",
						backgroundColor: "transparent",
						boxShadow: "none",
						right: "20px",
						height: "auto",
					}}
				/>
				<Button
					type="primary"
					style={{
						borderRadius: "25px",
						position: "absolute",
						right: "10px",
						bottom: `${isFocused ? "8.5px" : "8.5px"}`,
						backgroundColor: Color.send,
					}}
					onClick={onSubmitHandler}
				>
					Gửi
				</Button>
			</Footer>
		</Layout>
	);
};

export default Home;
