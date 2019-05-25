import {REGISTER_USER_FAILURE} from "../actions/actionsType";

const initialState = {
    registerError:null,
    user:null
};

const reducersUsers = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_FAILURE:
            return {...state,registerError:null,user: action.user};
        default:
            return state
    }
};

export default reducersUsers;
