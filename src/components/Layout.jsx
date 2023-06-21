import React,{ useState} from 'react'
import Navbar from './NavBar'

const Layout = ({children}) => {
const [coins,setCoins]=useState(0)
  return (
    <main className="layout">
         <Navbar coins={coins} setCoins={setCoins}/>
        {children}
    </main>
  )
}

export default Layout