import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Navbar extends Component {
    componentWillMount(){
        
    }
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{paddingLeft :'20px' ,paddingRight :'20px'}}>
            <a className="navbar-brand" href="#/"><strong>TOBTC Company CRUD</strong></a>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link to = '/create' className="nav-link small text-wite">Create User </Link>
                </li>
                <li className="nav-item">
                    <Link to = '/' className="nav-link small text-wite">Users List </Link>
                </li>
            </ul>
        </nav>  
    )
  }
}

export default Navbar