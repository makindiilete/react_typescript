/*ds interface is the model of what our state looks like*/
/*we can export it in other to make use of it in other files*/
import { Action } from "../actions/noteAction";

export interface NotesState {
  notes: string[];
}

/*ds is our initial state*/
const initialState = {
  notes: [],
};

/*our state arg is of type NotesState and its default value is the initialState*/
export const noteReducer = (
  state: NotesState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, action.payload] };
    default:
      return state;
  }
};
