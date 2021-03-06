import React, { createContext, useContext, useReducer } from "react";

// Prepares the CONTEXT API
export const StateContext = createContext();

// Wraps the app and provides the CONTEXT API
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);

// PULL THE INFO FROM THE CONTEXT API
export const useStateValue = () => useContext(StateContext);
