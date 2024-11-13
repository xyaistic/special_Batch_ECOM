import React from 'react'
import { Navigate } from 'react-router-dom'

const Authentication = ({Children}) => {
    const token = sessionStorage.getItem("token")
  return token ? Children : <Navigate to="/login" replace />
};

export default Authentication
