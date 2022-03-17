import { NAVBAR, HOME, MOVIE } from "./actionTypes";
export const navbar = (payload) => {
  return {
    type: NAVBAR,
    payload,
  };
};

export const home = (payload) => {
  return {
    type: HOME,
    payload,
  };
};

export const moive = (payload) => {
  return {
    type: MOVIE,
    payload,
  };
};
