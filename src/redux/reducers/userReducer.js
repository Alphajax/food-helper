import {USER_REDUCER_SET_REGISTRATION_STEP} from "../actions";

const initialState = {
    currentRegistrationStep: 0,
};

const updateUser = (state, action) => {
    if(state === undefined) {
        return initialState;
    }
    switch (action.type) {
        case USER_REDUCER_SET_REGISTRATION_STEP:
            return {
                ...state.userReducer,
                currentRegistrationStep: action.payload
            }
        default:
            return state.userReducer

    }
}

export default updateUser;
