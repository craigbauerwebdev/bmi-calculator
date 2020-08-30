// Action Creators
export const updateSystem = (system) => {
    return {
        type: "UPDATE_SYSTEM",
        payload: system
    }
}

export const updateLbs = (lbs) => {
    return {
        type: "UPDATE_LBS",
        payload: lbs
    }
}

export const updateFeet = (feet) => {
    //console.log("update Feet");
    return {
        type: "UPDATE_FEET",
        payload: feet
    }
}

export const updateInches = (inches) => {
    //console.log("update Inches AC");
    return {
        type: "UPDATE_INCHES",
        payload: inches
    }
}

export const updateCentimeters = (cm) => {
    return {
        type: "UPDATE_CENTIMETERS",
        payload: cm
    }
}

export const updateKilograms = (kg) => {
    return {
        type: "UPDATE_KILOGRAMS",
        payload: kg
    }
}

export const updateHeight = (height) => {
    //console.log("updateHeight ACTION Fired!");
    return {
        type: "UPDATE_HEIGHT",
        payload: height
    }
}

export const updateWeight = (weight) => {
    return {
        type: "UPDATE_WEIGHT",
        payload: weight
    }
}