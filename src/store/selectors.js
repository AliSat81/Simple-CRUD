import { createSelector } from "reselect"
import { get} from 'lodash'


const usersLoaded = (state) => get(state ,'database.usersloaded' ,false)
export const usersLoadedSelector = createSelector(usersLoaded ,u => u)

const users = (state) => get(state ,'database.users',{})
export const usersSelector = createSelector(users, u => u )

// const locationLoaded = (state) => get(state ,'database.locationloaded' ,false)
// export const locationLoadedSelector = createSelector(locationLoaded ,l => l)

const location = (state) => get(state ,'database.location','')
export const locationSelector = createSelector(location, l => l )

const firstName = (state) => get(state ,'database.firstName','')
export const firstNameSelector = createSelector(firstName, f => f )

const lastName = (state) => get(state ,'database.lastName','')
export const lastNameSelector = createSelector(lastName, l => l )

const email = (state) => get(state ,'database.email','')
export const emailSelector = createSelector(email, e => e )

const image = (state) => get(state ,'database.image','')
export const imageSelector = createSelector(image, i => i )

const creatingUser = (state) => get(state ,'database.creatingUser',false)
export const creatingUserSelector = createSelector(creatingUser, c => c )

const deletingUser = (state) => get(state ,'database.deletingUser',false)
export const deletingUserSelector = createSelector(deletingUser, d => d )









