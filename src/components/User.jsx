import React from 'react'
import { useParams ,useNavigate} from 'react-router-dom'


const User = () => {
  const params=useParams();
  const navigate=useNavigate();
  console.log(params.id);
  return (
    <div className="user">User
    <button onClick={()=>navigate("about")}>
      click me
      </button></div>
  )
}

export default User