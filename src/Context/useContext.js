import React, { createContext, useContext } from "react";

export const userContext = createContext({
    themeMode: "light",
    dark : () =>{},
    light : () =>{},
});

export const ThemeProvider =  userContext.Provider

export default function useTheme(){
    return useContext(userContext)
}