import React from 'react'
import { UserContext } from '../App'
import  { useContext } from 'react'

export default function Logout() {
  setUser(null)
  return (
    <p>You have logged out</p>
  )
}
