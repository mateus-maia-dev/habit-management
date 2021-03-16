import GroupCard from "./GroupCard";
import axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";
import GroupUpdate from "../GroupUpdate/GrouUpdate";
import api from "../../services/api";

const GroupList = () => {
    const [ groups, setGroups ] = useState([])

    useEffect(() => {
      api
        .get("/groups/")
        .then(res => setGroups(res.data.results))
    },[])

  return (
    <div>
      {groups && groups.map((group, index) => (
        <GroupCard key={index} group={group} />
      ))}
    </div>
  );
};

export default GroupList;
