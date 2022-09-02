import React, { Component } from 'react'
import { connect } from 'react-redux'
import { OverlayTrigger , Tooltip } from 'react-bootstrap'
import { loadUsers ,deleteUser } from '../store/intractions'
import { deletingUserSelector, usersLoadedSelector, usersSelector } from '../store/selectors'
import Spinner from './Spinner'

const showTable = (props) => {
    return(
        <table className="table table-bordered text-white table-hover">
        <thead>
            <tr>
            <th scope="col"><strong>First Name</strong></th>
            <th scope="col"><strong>Last Name</strong></th>
            <th scope="col"><strong>Email</strong></th>
            <th scope="col"><strong>Country</strong></th>
            <th scope="col"><strong>City</strong></th>
            <th scope="col"><strong>Image</strong></th>
            </tr>
        </thead>
        <tbody className="table-group ">
            {showUsers(props)}
        </tbody>
    </table>
    )
}

const showUsers = (props) => {
    let { users , dispatch} = props
    return users.map(user =>{
        const  path = require('../uploads/'+user.filename)
        return (
            <OverlayTrigger 
                key={user._id}
                overlay={
                    <Tooltip id={user._id} className="tooltip">
                    Click here to <strong>Delete</strong>
                    </Tooltip>
                }
                > 
                <tr 
                    onClick={e => deleteUser(user ,dispatch)}
                    className={`user-${user._id}`} 
                    key={user._id} 
                    style={{height:'70px'
                }}>
                    <td className='text-white'>{user.firstName}</td>
                    <td className='text-white'>{user.lastName}</td>
                    <td className='text-white'>{user.email}</td>
                    <td className='text-white'>{user.country}</td>
                    <td className='text-white'>{user.city}</td>
                    <td className='text-white' style={{width :'70px' ,padding:'0.5px'}}><img style={{height:'70px'}}src={path} alt='not loading'></img></td>
                </tr>
            </OverlayTrigger>
        )
    })
}

class UsersList extends Component {
    componentDidMount(){
        this.loadDbData()
    }
    async loadDbData(){
        await loadUsers(this.props.dispatch)
    }
  render() {
    return (
        <div className="form-body" >
        <div className="row" >
            <div className="form-holder" >
                <div className="form-content">
                    <div className="form-items" style={{padding : "20px"}}>
                        <h3>Users</h3>
                        <div className="card-body">
                        {this.props.usersLoaded && !this.props.deletingUser ?  showTable(this.props) : <Spinner/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
function mapStateToProps(state){
    return{
        usersLoaded : usersLoadedSelector(state) ,
        users : usersSelector(state) ,
        deletingUser : deletingUserSelector(state)
    }
}
export default connect(mapStateToProps)(UsersList)