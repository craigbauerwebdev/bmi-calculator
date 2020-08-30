import { combineReducers } from 'redux';

const updateSystemReducer = (state = "imperial", action) => {
    if (action.type === "UPDATE_SYSTEM") {
        return action.payload;
    }
    return state;
}

const updateFeetReducer = (state = null, action) => {
    if (action.type === 'UPDATE_FEET') {
        return action.payload;
    }
    return state;
}

const updateInchesReducer = (state = null, action) => {
    if (action.type === 'UPDATE_INCHES') {
        return action.payload;
    }
    return state;
}

const updateLbsReducer = (state = null, action) => {
    if (action.type === 'UPDATE_LBS') {
        return action.payload;;
    }
    return state;
}

const updateCentimetersReducer = (state = null, action) => {
    if (action.type === 'UPDATE_CENTIMETERS') {
        return action.payload;
    }
    return state;
}

const updateKilogramsReducer = (state = null, action) => {
    if (action.type === 'UPDATE_KILOGRAMS') {
        return action.payload;
    }
    return state;
}

const updateWeightReducer = (state = null, action) => {
    if (action.type === 'UPDATE_WEIGHT') {
        return action.payload;
    }
    return state;
}

const updateHeightReducer = (state = null, action) => {
    //console.log("update height reducer");
    if (action.type === 'UPDATE_HEIGHT') {
        return action.payload;
    }
    return state;
}

export default combineReducers({
    system: updateSystemReducer,
    feet: updateFeetReducer,
    inches: updateInchesReducer,
    lbs: updateLbsReducer,
    cm: updateCentimetersReducer,
    kg: updateKilogramsReducer,
    weight: updateWeightReducer,
    height: updateHeightReducer
});