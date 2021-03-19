import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/api";
import GroupCard from "./GroupCard";
import { Container } from "./ListStyle";
import jwt_decoded from "jwt-decode";
import { useEffect } from "react";

const GroupList = ({ items, handleId }) => {
  const [userData, setUserData] = useState([]);
  const [myGroup, setMyGroup] = useState("");

  const token = useSelector((state) => state.signInReducer);
  const decoded = jwt_decoded(token.token);

  const handleUserData = () => {
    api
      .get(`/users/${decoded.user_id}/`, {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      })
      .then((response) => setUserData(response.data));
  };

  useEffect(() => {
    userData.group &&
      api
        .get(`/groups/${userData.group}/`, {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        })
        .then((response) => setMyGroup(response.data));
  }, [userData]);
  
  useEffect(() => {
    handleUserData();
  }, []);

  return (
    <Container>
      {items.map((item, index) => (
        <GroupCard key={index} item={item} handleId={handleId} setMyGroup={setMyGroup} myGroup={myGroup}/>
      ))}
    </Container>
  );
};

export default GroupList;
