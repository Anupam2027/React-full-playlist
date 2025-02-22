import React from 'react'
import Usercontext from './UserContext'

const UserContextProvider = ({childen}) => {
    const [user,setuser] = React.useState(null);
  return (
    <Usercontext.Provider value={{user,setuser}}>
      {childen}
    </Usercontext.Provider>
  )
}

export default UserContextProvider
