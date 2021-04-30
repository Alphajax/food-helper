import {
    USER_REDUCER_SET_FIRST_STEP_REGISTRATION_DATA,
    USER_REDUCER_SET_REGISTRATION_STEP,
    USER_REDUCER_SET_SECOND_STEP_REGISTRATION_DATA,
    USER_REDUCER_SET_THIRD_STEP_REGISTRATION_DATA
} from "../actions";

export const setRegistrationsStep = (step) => ({
    type: USER_REDUCER_SET_REGISTRATION_STEP,
    payload: step
})

export const setFirstStepRegistrationData = (data) => ({
    type: USER_REDUCER_SET_FIRST_STEP_REGISTRATION_DATA,
    payload: data
})

export const setSecondStepRegistrationData = (data) => ({
    type: USER_REDUCER_SET_SECOND_STEP_REGISTRATION_DATA,
    payload: data
})

export const setThirdStepRegistrationData = (data) => ({
    type: USER_REDUCER_SET_THIRD_STEP_REGISTRATION_DATA,
    payload: data
})
