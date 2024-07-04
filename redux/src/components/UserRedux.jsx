import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "../redux/userSlice";
import { fetchUserMiddleware } from "../redux/middleware/userMiddleware";

const actions = userSlice.actions;

const UserRedux = () => {
  const { loading, error, user, param } = useSelector(
    (store) => store.userState
  );
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (param != null) {
      dispatch(fetchUserMiddleware(param));
    }
  }, [param]);

  const handleParam = () => {
    dispatch(actions.setParam(value));
  };

  const heading = (
    <>
      <h2>User Example</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button onClick={handleParam}>Search User</button>
    </>
  );

  if (loading) {
    return (
      <>
        {heading}
        <div>Loading</div>
      </>
    );
  }
  if (error) {
    return (
        <>
          {heading}
          <div>Error</div>
        </>
      );
  }
  return (
    <>
        {heading}
      <h2>Name: {user.name}</h2>
      <h2>Phone: {user.phone}</h2>
    </>
  );
};

export default UserRedux;
