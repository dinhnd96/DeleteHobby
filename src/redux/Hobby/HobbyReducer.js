import { ADD_HOBBY } from "./HobbyType";
import { SET_ACTIVE_HOBBY } from "./HobbyType";
import { DELETE_HOBBY } from "./HobbyType";

const initialState = {
  list: [],
  activeId: null,
};

const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HOBBY:
      const newList = [...state.list];
      newList.push(action.payload);
      {
        return {
          ...state,
          list: newList,
        };
      }
    case SET_ACTIVE_HOBBY:
      const newActiveId = action.payload.id;
      {
        return {
          ...state,
          activeId: newActiveId,
        };
      }
    case DELETE_HOBBY: {
      const newList2 = [...state.list];
      return {
        ...state,
        list: newList2.filter((item) => item.id !== action.payload.id),
      };
    }

    default:
      return state;
  }
};
export default hobbyReducer;
