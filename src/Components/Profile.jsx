import React, { useState } from 'react'
import axios from 'react'

const Profile = () => {
  const [userData, setUserData] = useState(second)

  const getProfileData = () => {
    const token = (localStorage.getItem("token"))

    const header = {
      headers: {
        authorization: '$(token)'
      }
    }

    axios.get(`                     `, header)
      .then((res) => {
        console.log("Profile data", res)
      })
      .catch((err) => {
        console.log("Error occured", err)
      })

    const handleLogOut = () => {
      localStorage.removeItem("token")
      alert("Log Out Success ")
    };

  }
  return (
    <div>
      <p>Profile</p>
      <button onClick={getProfileData}>Get Profile Data</button>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default Profile
