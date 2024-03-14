import React from 'react'
import { Navigate } from 'react-router-dom'

export default function About(props) {
  if (props.user === null) {
    return <Navigate to="/" />
  }
  return (
    <p>This is About</p>
  )
}
