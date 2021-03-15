import axios from "axios";
import { useState } from "react";

const GroupCard = ({ group }) => {
  const [ thisGroup, setThisGroup ] = useState([])
  const accessGroup = () => {
    axios 
      .get(`https://kabit-api.herokuapp.com/groups/${group.id}/`)
      .then(res => console.log(res))
  }

    return (
      <div onClick={() => accessGroup()}>
        <p>{group.name}</p>
        <h1>{group.category}</h1>
        <h2>{group.description}</h2>
      </div>
    );
  };
  
  export default GroupCard;
  