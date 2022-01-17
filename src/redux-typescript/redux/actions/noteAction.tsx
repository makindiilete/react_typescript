/*Our action arg must have a type so we define the type here which is an object containing the action type and the payload it expects*/
export type Action = { type: "ADD_NOTE"; payload: string };

export const noteAction = (note: string): Action => {
  return {
    type: "ADD_NOTE",
    payload: note,
  };
};
