import {USER_REDUCER_SET_REGISTRATION_STEP} from "../actions";

export const setRegistrationsStep = (step) => ({
    type: USER_REDUCER_SET_REGISTRATION_STEP,
    payload: step
})
