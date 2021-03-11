import { ActionType } from "../../action";
import { StatisticType } from "../../../const";

const initialState = {
  statisticType: StatisticType.YEARS,
  filter: new Date().getFullYear(),
  statsByInterval: {
    actualTimeBiologicalNight: 0,
    actualTimeBlock: 0,
    actualTimeFlight: 0,
    actualTimeNight: 0,
    actualTimeWork: 0,
    name: "",
    interval: "",
    plannedTimeBiologicalNight: 0,
    plannedTimeBlock: 0,
    plannedTimeFlight: 0,
    plannedTimeNight: 0,
    plannedTimeWork: 0,
  },
};

export const statisticData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_STATISTIC_TYPE:
      return { ...state, statisticType: action.payload };
    case ActionType.CHANGE_FILTER:
      return { ...state, filter: action.payload };
    case ActionType.CHANGE_INTERVAL:
      return { ...state, statsByInterval: action.payload };

    default:
      return state;
  }
};
