import { ActionType } from "../../action";
import { StatisticType } from "../../../const";

const initialState = {
  statisticType: StatisticType.YEARS,
  filter: ""
};

export const statisticData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_STATISTIC_TYPE:
      return { ...state, statisticType: action.payload };
    case ActionType.CHANGE_FILTER:
        return { ...state, filter: action.payload };

    default:
      return state;
  }
};
