import { GETPOCKEMONLIST } from "../type/typeAction";
import { ERRORREQUEST } from "../type/typeAction";
import { GETDETAILSPOCKEMON } from "../type/typeAction";
import { LOADERON } from "../type/typeAction";
export const getListPockemon = (data) => {
  return {
    type: GETPOCKEMONLIST,
    data,
  };
};

export const errorRequest = () => {
  return {
    type: ERRORREQUEST,
  };
};

export const getDetailsPockemon = (data) => {
  return {
    type: GETDETAILSPOCKEMON,
    data,
  };
};

export const loaderOn = () => {
  return {
    type: LOADERON,
  };
};
