import React from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../Feed/Feed'

const UserProfile = () => {
    const {user} = useParams()
  return (
    <section className="container mainSection">
      <Feed user={user}/>
    </section>
  )
}

export default UserProfile