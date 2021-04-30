import {
    USER_REDUCER_SET_FIRST_STEP_REGISTRATION_DATA,
    USER_REDUCER_SET_REGISTRATION_STEP,
    USER_REDUCER_SET_SECOND_STEP_REGISTRATION_DATA, USER_REDUCER_SET_THIRD_STEP_REGISTRATION_DATA
} from "../actions";

const initialState = {
    currentRegistrationStep: 0,
    firstStepRegistrationData: null,
    secondStepRegistrationData: null,
    thirdStepRegistrationData: null
};

const updateUser = (state, action) => {
    if (state === undefined) {
        return initialState;
    }
    switch (action.type) {
        case USER_REDUCER_SET_REGISTRATION_STEP:
            return {
                ...state.userReducer,
                currentRegistrationStep: action.payload,
            }
        case USER_REDUCER_SET_FIRST_STEP_REGISTRATION_DATA:
            return {
                ...state,
                firstStepRegistrationData: action.payload,
            }
        case USER_REDUCER_SET_SECOND_STEP_REGISTRATION_DATA:
            return {
                ...state,
                secondStepRegistrationData: action.payload,
            }
        case USER_REDUCER_SET_THIRD_STEP_REGISTRATION_DATA:
            return {
                ...state,
                thirdStepRegistrationData: action.payload,
            }
        default:
            return state.userReducer

    }
}

export default updateUser;
