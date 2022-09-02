import {combineReducers} from 'redux';

function database( state = { } , action ){
    switch (action.type){
        case "USERS_LOADED" :
            return { ...state ,usersloaded : true ,users : action.users}
        case "GEO_LOCATION_LOADED" :
            return { ...state ,location : action.location}
        case "FIRST_NAME_CHANGED" :
            return { ...state ,firstName : action.firstName}
        case "LAST_NAME_CHANGED" :
            return { ...state ,lastName : action.lastName}
        case "EMAIL_CHANGED" :
            return { ...state ,email : action.email}
        case "IMAGE_CHANGED" :
            return { ...state ,image : action.image}
        case "CREATING_USER" :
            return { ...state , creatingUser:true}
        case "USER_CREATED" :
            return { ...state , creatingUser:false , user : action.user}
        case "DELETING_USER" :
            return { ...state , deletingUser:true}
        case "USER_DELETED" :
            return { ...state , deletingUser:false , response : action.response}
        default:
            return state
    }
    
}


const rootReducer = combineReducers({
    database ,
})

export default rootReducer 