import { createContext, Dispatch, SetStateAction } from "react";

export interface IFilterContext {
  sevenDaySpan: boolean;
  setSevenDaySpan: Dispatch<SetStateAction<boolean>>;
}

export const FilterContext = createContext<IFilterContext>({
  sevenDaySpan: false,
  setSevenDaySpan: () => {},
});
