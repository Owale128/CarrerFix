import { IJobAd } from "../models/IJobAd";

export interface IAction {
    type: ActionType;
    payload: IJobAd | string;
}

export enum ActionType {
    ADD_AD,
    REMOVE_AD
}

export const SaveAdReducer = (state: IJobAd[], action: IAction): IJobAd[] => {
    switch (action.type) {
        case ActionType.ADD_AD: {
            const adToAdd = action.payload as IJobAd;
            if (adToAdd && !state.find(ad => ad.id === adToAdd.id)) {
                return [...state, adToAdd];
            }
            return state;
        }
        case ActionType.REMOVE_AD: {
               return state.filter((state) => state.id !== action.payload)
        }
        default:
            return state;
    }
}
