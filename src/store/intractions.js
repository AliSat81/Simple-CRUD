import axios from 'axios'
import {
    usersLoaded ,
    geoLocationLoaded ,
    userCreated ,
    creatingUser ,
    deletingUser ,
    userDeleted
   } from "./actions"

export const loadUsers = async (dispatch) => {
    axios.get('http://localhost:5000/')
    .then(users => {
        dispatch(usersLoaded(users.data))
    })
    .catch(error=>{
        window.alert('ERROR'+ error.toString())
        window.location.reload()
    })
}

export const loadGeoLocation = (dispatch) => {
    axios.get('https://ipapi.co/json/')
    .then((response) => {
        dispatch(geoLocationLoaded(response.data))
    }).catch((error) => {
        window.alert('ERROR'+ error.toString())
        window.location.reload()
    })
}

export const createUser = async (email ,firstName ,lastName ,ip ,country ,city ,image ,dispatch) => {

    dispatch(creatingUser())

    const date = new Date()
    let form = new FormData()

    form.append("email",email)
    form.append("firstName",firstName)
    form.append("lastName",lastName)
    form.append("ip",ip)
    form.append("country",country)
    form.append("city",city)
    form.append("date",date)
    form.append("uploaded_file",image)


    axios.post('http://localhost:5000/createuser/', form )
        .then( res => {
            dispatch(userCreated(res))
            window.alert('User Successfully Created !')
        })
        .catch(error => {
            window.alert("ERROR : ",error.toString())
            window.location.reload()
        })


}

export const deleteUser = async (user , dispatch) => {

    dispatch(deletingUser())

    axios.delete('http://localhost:5000/deleteuser/'+user._id)
        .then( res => {
            dispatch(userDeleted(res))
            window.alert('User Successfully Deleted !')
        })
        .catch(error => {
            window.alert("ERROR : ",error.toString())
            window.location.reload()
        })
}
