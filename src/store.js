import {combineReducers, createStore, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk";

const middleware= [thunk]

const initialState={}

const reducer = combineReducers({
    testing:"testtingreducer"
})

const store =createStore(
    reducer,
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store