import { ADD_HOBBY } from "./HobbyType";
import { SET_ACTIVE_HOBBY } from "./HobbyType";
import { DELETE_HOBBY } from "./HobbyType";
import { EDIT_HOBBY } from "./HobbyType";

export const addHobby = (hobby) => {
  return {
    type: ADD_HOBBY,
    payload: hobby,
  };
};

export const setActiveHobby = (hobby) => {
  return {
    type: SET_ACTIVE_HOBBY,
    payload: hobby,
  };
};

export const deleteHobby = (hobby) => {
  return {
    type: DELETE_HOBBY,
    payload: hobby,
  };
};

export const editHobby = (hobby) => {
  return {
    type: EDIT_HOBBY,
    payload: hobby,
  };
};
