import userSlice from "../userSlice";

const actions = userSlice.actions;

export const fetchUserMiddleware = (param) => {
  return async (dispatch) => {
    try {
      dispatch(actions.userLoading());
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${param}`
      );
      if (!response.ok) {
        throw new Error(response.error);
      }
      const user = await response.json();
      console.log(user);
      dispatch(actions.userData(user));
    } catch (error) {
      dispatch(actions.userError());
    }
  };
};
