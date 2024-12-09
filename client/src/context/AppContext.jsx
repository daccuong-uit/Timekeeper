import React, { createContext } from 'react';
// import axios from 'axios';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const send = async (inputText) => {
    try {
      //const response = await axios.post('http://localhost:8386/', {
        //inputText,
      //});
      //return response.data;
      return {
        sentiment: 1,
        explain: inputText
      };
    } catch (error) {
      console.error('Error sending data:', error);
      throw error;
    }
  };

  return (
    <AppContext.Provider value={{ send }}>
      {children}
    </AppContext.Provider>
  );
};