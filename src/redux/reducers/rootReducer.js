import userReducer from "./userReducer";


const rootReducer = (state, action) => {
    return {
        userReducer: userReducer(state, action),
    }
}

export default rootReducer;
