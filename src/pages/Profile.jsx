import axios from 'axios';
import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from '../components/Navbar';

const Profile = () => {

  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("accessTokenApi");
    history.replace("/");
  }

  return (
    <>
      <Navbar/>
      <button onClick={logout}>Logout</button>
    </>
  )
}

export default Profile