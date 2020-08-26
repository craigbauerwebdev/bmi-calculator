// Action Creators
export const updateLbs = (lbs) => {
    console.log(lbs, " -LBS");
    return {
        type: 'UPDATE_LBS',
        payload: lbs
    }
}