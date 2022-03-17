import { NAVBAR, HOME, MOVIE } from "./actionTypes";
import { navbar, home, movie } from "./actions";
const initState = {
  data: [],
  filterData: [],
  isLoading: false,
  isError: false,
};

export const MovieReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case NAVBAR:
      return {};
    case HOME:
      return {};
    case MOVIE:
      return {};
  }
};
