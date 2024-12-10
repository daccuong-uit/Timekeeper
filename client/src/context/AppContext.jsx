import { createContext } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const send = async (inputText) => {
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_APP_API_URL}/classify-comment`,
				{},
				{
					params: {
						text: inputText,
					},
				}
			);
			console.log(response.data);
			return {
				sentiment: response.data.predict,
				explain: inputText,
			};
		} catch (error) {
			console.error("Error sending data:", error);
			throw error;
		}
	};

	return <AppContext.Provider value={{ send }}>{children}</AppContext.Provider>;
};
