import { IJobAd } from "../models/IJobAd";

interface IAction {
    type: ActionType;
    payload: string;
}

export enum ActionType {
    FILTER_BY_DATE,
    FILTER_BY_CITY
}

export const adReducer = (state: IJobAd[], action: IAction) => {

    switch(action.type) {
        case ActionType.FILTER_BY_CITY:
            

    }

}