import React from 'react'
import NavBar from '../navbar'

const Layout = ({children}) => {
  return (
    <React.Fragment>
        <NavBar />
        {children}
    </React.Fragment>
  )
}

export default Layout