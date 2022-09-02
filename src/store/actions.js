export function usersLoaded(users){
    return {
        type : "USERS_LOADED",
        users
    }
}

export function geoLocationLoaded(location){
    return {
        type : "GEO_LOCATION_LOADED",
        location
    }
}

export function firstNameChanged(firstName){
    return {
        type : "FIRST_NAME_CHANGED",
        firstName
    }
}

export function lastNameChanged(lastName){
    return {
        type : "LAST_NAME_CHANGED",
        lastName
    }
}

export function emailChanged(email){
    return {
        type : "EMAIL_CHANGED",
        email
    }
}

export function imageChanged(image){
    return {
        type : "IMAGE_CHANGED",
        image
    }
}

export function creatingUser(){
    return {
        type : "CREATING_USER",
    }
}
export function userCreated(user){
    return {
        type : "USER_CREATED",
        user
    }
}

export function deletingUser(){
    return {
        type : "DELETING_USER",
    }
}
export function userDeleted(response){
    return {
        type : "USER_DELETED",
        response
    }
}

