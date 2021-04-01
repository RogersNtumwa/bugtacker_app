import {  REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types"
export const registerUserReducer = (state={user:[], loading:true}, action)=>{

    const {type, payload}= action

    switch (type) {
        case REGISTER_SUCCESS:
            return{
                ...state,
                loading:false,
                success:true,
                user:payload
            }
        case REGISTER_FAIL:
            return{
                ...state,
                loading:false,
                errors:payload
            }
        default:
            return state;
    }
}
