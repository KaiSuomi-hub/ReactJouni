import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../App'

export default function About() {
  const {user} = useContext(UserContext)

  if (props.user === null) {
    return <Navigate to="/" />
  }
  return (
    <p>This is About</p>
  )
}
