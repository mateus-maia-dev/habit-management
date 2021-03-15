import GroupCard from "./groupCard";
import axios from 'axios'
import { useState } from "react";

const GroupList = () => {
    const [ groups, setGroups ] = useState([])
    axios
        .get("https://kabit-api.herokuapp.com/groups/")
        .then(res => setGroups(res.data.results))
  return (
    <div>
        <button onClick={() => console.log(groups)}>groups</button>
      {groups && groups.map((group, index) => (
        <GroupCard key={index} group={group} />
      ))}
    </div>
  );
};

export default GroupList;