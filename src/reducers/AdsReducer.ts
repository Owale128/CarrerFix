import { IJobAd } from "../models/IJobAd";

export interface IAction <T> {
    type: ActionType;
    payload: T;
}

export enum ActionType {
    SET_SEARCH_TEXT,
    SET_ALL_ADS,
    SET_FILTERED_ADS,
    SET_CURRENT_PAGE,
    SET_TOTAL_PAGES,
    SET_LOADING
}

interface AdsState {
    searchText: string;
    allAds: IJobAd[];
    filteredAds: IJobAd[];
    currentPage: number;
    totalPages: number;
    loading: boolean;
}

export const initialState: AdsState = {
    searchText: '',
    allAds: [],
    filteredAds: [],
    currentPage: 1,
    totalPages: 1,
    loading: false
}

export const AdsReducer = (state: AdsState, action: IAction<string | IJobAd[] | number | boolean>) => {

    switch(action.type) {
        case ActionType.SET_SEARCH_TEXT:
            return {...state, searchText: action.payload as string}

            case ActionType.SET_ALL_ADS:
                return {...state, allAds: action.payload as IJobAd[]}

                case ActionType.SET_FILTERED_ADS:
                    return {...state, filteredAds: action.payload as IJobAd[]}

                    case ActionType.SET_CURRENT_PAGE:
                        return {...state, currentPage: action.payload as number}

                        case ActionType.SET_TOTAL_PAGES:
                            return {...state, totalPages: action.payload as number}

                            case ActionType.SET_LOADING:
                                return {...state, loading: action.payload as boolean}

                                default:
                                    return state
    }
}