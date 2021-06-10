import React from "react";
import { useSelector, useDispatch } from "react-redux";
import HobbyList from "../components/HobbyList/HobbyList";
import {
  addHobby,
  setActiveHobby,
  deleteHobby,
} from "../redux/Hobby/HobbyAction";

function HomePage(props) {
  const dispatch = useDispatch();
  const activeId = useSelector((state) => state.hobby.activeId);
  const hobbyList = useSelector((state) => state.hobby.list);
  const handleAddHobbyClick = () => {
    const randomNumber = () => {
      return 1000 + Math.trunc(Math.random() * 9000);
    };
    const newId = randomNumber();
    const newHobby = {
      id: newId,
      title: `Hobby Number ${newId}`,
    };
    dispatch(addHobby(newHobby));
  };
  console.log(hobbyList);
  const handleHobbyClick = (hobby) => {
    console.log("homepagge onclick: ", hobby);
    dispatch(deleteHobby(hobby));
  };
  return (
    <div>
      <h1>Hello Redux - Home Page</h1>
      <button onClick={handleAddHobbyClick}>Random Hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      />
    </div>
  );
}

export default HomePage;
