import { GETPOCKEMONLIST } from "../type/typeAction";
import { ERRORREQUEST } from "../type/typeAction";
import { GETDETAILSPOCKEMON } from "../type/typeAction";
import { LOADERON } from "../type/typeAction";

const initialState = {
  listPockemon: null,
  loading: true,
  errorRequest: false,
  detailsPockemon: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GETPOCKEMONLIST:
      const { data } = action;
      const allIdListPokemon = [];
      const listPockemon = data.reduce((item, obj) => {
        item[obj.id] = obj;
        allIdListPokemon.push(obj.id);
        return item;
      }, {});
      listPockemon.allId = allIdListPokemon;
      return {
        ...state,
        loading: false,
        listPockemon,
      };

    case ERRORREQUEST:
      return {
        ...state,
        errorRequest: true,
        loading: false,
      };

    case GETDETAILSPOCKEMON:
      return {
        ...state,
        loading: false,
        detailsPockemon: action.data,
      };
    case LOADERON:
      return {
        ...state,
        loading: true,
      };
    default:
      return {
        ...state,
      };
  }
}

export default reducer;
