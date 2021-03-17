// import api from "../../services/api";
// import { useDispatch, useSelector } from "react-redux";
// import jwtDecode from "jwt-decode";

// const SubscribeToAGroup = ({ id }) => {
//   const token = localStorage.getItem("token");
//   // const dispatch = useDispatch();

//   api
//     .post(`/groups/${id}/subscribe`, {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//     .catch((e) => console.log(e));

//   return <div></div>;
// };

// const LeaveGroup = () => {
//     const {token} = useSelector((state) => state.signInReducer)
//     const decoded = jwtDecode(token);

// }
