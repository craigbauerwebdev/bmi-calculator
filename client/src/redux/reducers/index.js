import { combineReducers } from 'redux';

const updateLbsReducer = (state = 220, action) => {
    console.log("updateLbsReducer Fired");
    if (action.type === 'UPDATE_LBS') {
        //update action.payload and return updated data
        return action.payload
    }
    return state;
}


export default combineReducers({
    lbs: updateLbsReducer 
});