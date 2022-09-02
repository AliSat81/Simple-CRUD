import React , { Component } from 'react'
import './App.css'
//import { connect } from 'react-redux'
import {  Routes , Route } from "react-router-dom"
import  Navbar  from './Navbar'
import CreateUser from './CreateUser'
import UsersList from './UsersList'
import { Fragment } from 'react'


class App extends Component {
  render(){
    return (
      <Fragment>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<UsersList/>} />
            <Route path='/create' element={<CreateUser/>} />
          </Routes>
      </Fragment>
    );
  }
}
// function mapStateToProps(state){
//   // return(
    
//   // )
// }
// connect(mapStateToProps)
export default (App);
