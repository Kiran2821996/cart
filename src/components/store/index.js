import { createStore } from "redux";

const DEFAULT_STATE = {
    "loggedInUser": null,
    "login":false,
   
}


const authReducer = (state = DEFAULT_STATE, action) => {

    if(action.type==='SET_LOGIN_DATA'){
        return {...state,"loggedInUser": action.payload}
    }
    if(action.type==="setLogin"){
        return {...state,"login": action.payload}
    }
    return state
}


const store = createStore(authReducer)

export default store