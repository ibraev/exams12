import {FETCH_GALLERY_SUCCESS} from "../actions/actionsType";

const initialState = {
    gallery:[]
};

const reducersGallery = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GALLERY_SUCCESS:
            return {...state, gallery: action.gallery};
        default:
            return state;
    }
};

export default reducersGallery;
