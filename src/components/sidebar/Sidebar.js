import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = props =>{

    return(
        <header className={props.open?"sidebaropen":"sidebarclose"}>
            <nav className="sidebarnav">
                <div className="links">
                   <div className="link">
                       <Link to="/" style={{textDecoration : "none" , color : "black"}} onClick={()=>props.setTitleHeader("Home")}>
                           <i className="material-icons">home</i>
                           Home
                       </Link>
                   </div>
                   <div className="link">
                       <Link to="/archived" onClick={()=>props.setTitleHeader("Archive")} style={{textDecoration : "none" , color : "black"}}>
                            <i className="material-icons">archive</i>
                           Archive
                       </Link>
                   </div>
                </div>
            </nav>
        </header>
    )
}

export default Sidebar;