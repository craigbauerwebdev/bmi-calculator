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
    return {
        type: "UPDATE_FEET",
        payload: feet
    }
}

export const updateInches = (inches) => {
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