import {FETCH_GALLERY_SUCCESS} from "./actionsType";
import axios from '../../axios-api'

export const fetchGallery_Success = gallery => ({type:FETCH_GALLERY_SUCCESS, gallery});

export const fetchGallery = (gallery) => {
    return dispatch => {
        return axios.get('/gallery', gallery).then(
            response => dispatch(fetchGallery_Success(response.data))
        )
    }
};
