import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadGeoLocation ,createUser } from '../store/intractions'
import { creatingUserSelector, emailSelector, firstNameSelector, imageSelector, lastNameSelector, locationSelector } from '../store/selectors'
import { 
    firstNameChanged ,
    lastNameChanged ,
    emailChanged ,
    imageChanged
} from "../store/actions"
import Spinner from './Spinner'

const showForm = (props) => {
    const {
        email , firstName ,lastName ,ip ,country ,city ,image , dispatch
    } = props
    return(
        <form className="requires-validation" 
                encType='multipart/form-data'
                onSubmit={ e =>{
                    e.preventDefault()
                    createUser(email ,firstName ,lastName ,ip ,country ,city ,image ,dispatch)
                }}>
            <p className='text-muted' name="ip" style={{marginBottom:'0px'}}>IPV6 : <strong>{ip || ''}</strong></p>
            <div className='form-group 'style={{width:'100%'}}>
            <div className='row'>
                <div className="col-md-12" style={{width:'50%' ,paddingRight:'5px'}}>
                    <input className="form-control" 
                    onChange={ e => dispatch(firstNameChanged(e.target.value))}
                    type="text" 
                    name="firstName"  
                    placeholder="First Name" 
                    required />
                </div>
                <div className="col-md-12" style={{width:'50%',float:'right',paddingLeft:'5px'}}>
                    <input className="form-control" 
                    onChange={ e => dispatch(lastNameChanged(e.target.value))}
                    type="text" 
                    name="lastName"  
                    placeholder="Last Name" 
                    required />
                </div>
            </div>
            <div className="col-md-12">
                <input className="form-control" 
                onChange={ e => dispatch(emailChanged(e.target.value))}
                type="email" 
                name="email"  
                placeholder="E-mail Address" 
                required />
            </div>
            <div className="col-md-12">
                <input className="form-control" type="text" placeholder="Country"  name="country" value={country || ''} required disabled/>
            </div>
            <div className="col-md-12">
                <input className="form-control" type="text" placeholder="City" name="city" value={city || ''} required disabled/>
            </div>
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label text-muted" style={{ marginBottom:'0px' ,marginTop:'8px'}}>Personal Picture</label>
                <input className="form-control" 
                onChange={ e => dispatch(imageChanged(e.target.files[0]))}
                type="file" id="formFile" 
                accept=".jpg, .jpeg, .png" 
                name="uploaded_file" required />
            </div>
            <div className="form-button d-grid gap-2 mt-1">
                <button name="submit" type="submit" className="btn btn-primary">Register</button>
            </div>
            <button type='reset' style={{backgroundColor: '#2a2f33' , border:'0px'}}><small className='text-white'>Erase</small></button>
            </div>
        </form>
)}
class CreateUser extends Component {
    componentWillMount(){
        this.getLocation()
    }
    async getLocation(){
        loadGeoLocation(this.props.dispatch)
    }
  render() {
    return (
        <div className="form-body">
        <div className="row">
            <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                        <h3>Register Today</h3>
                        {this.props.formLoader ? showForm(this.props) : <Spinner />}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

function mapStateToProps(state){
    const formLoader = locationSelector(state) && !creatingUserSelector(state)
    console.log(locationSelector(state)==='')
    return{
        ip : locationSelector(state).ip ,
        city : locationSelector(state).city ,
        country : locationSelector(state).country_name ,
        firstName : firstNameSelector(state) ,
        lastName : lastNameSelector(state) ,
        email : emailSelector(state) ,
        image : imageSelector(state) ,
        formLoader : formLoader
    }
}
export default connect(mapStateToProps)(CreateUser)