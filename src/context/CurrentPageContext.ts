import { createContext } from "react";

interface ICurrentPageContext {
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

export const CurrentPagecContext = createContext<ICurrentPageContext>( {
    currentPage: 1,
    setCurrentPage: () => {}
})