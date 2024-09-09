import { createContext } from "react";

export interface ITheme {
    name: string;
    backgroundColor: string;
    foregroundColor: string;
}

 interface IThemes {
    dark: ITheme;
    light: ITheme;
}

export const themes: IThemes = {
    dark: {
        name: 'Night',
        backgroundColor: 'white',
        foregroundColor: 'black'
    },
    light: {
        name: 'Day',
        backgroundColor: 'black',
        foregroundColor: 'white'
    }
}

export const ThemeContext = createContext<ITheme>(themes.light)

