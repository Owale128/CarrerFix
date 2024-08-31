import { createContext } from "react";

export interface ISearchTextContext {
  searchText: string;
  setSearchText: (text: string) => void;
}

export const SearchTextContext = createContext<ISearchTextContext>({
  searchText: "",
  setSearchText: () => {},
});
