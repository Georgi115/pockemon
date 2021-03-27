import Service from "../../service/service";
import { getListPockemon, loaderOn } from "../actionCreator/actionCreator";
import { errorRequest } from "../actionCreator/actionCreator";
import { getDetailsPockemon } from "../actionCreator/actionCreator";

const service = new Service();

export const enterApp = () => {
  return (dispatch) => {
    dispatch(loaderOn());
    service
      .getListPockemon()
      .then((res) => dispatch(getListPockemon(res.cards)))
      .catch((err) => dispatch(errorRequest()));
  };
};

export const detailsPockemon = (id) => {
  return (dispatch) => {
    dispatch(loaderOn());
    service
      .getDetailsPockemon(id)
      .then((res) => dispatch(getDetailsPockemon(res.card)))
      .catch((err) => dispatch(errorRequest()));
  };
};
