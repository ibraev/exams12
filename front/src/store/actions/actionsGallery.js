import {CREATE_GALLERY_SUCCESS, FETCH_GALLERY_SUCCESS} from "./actionsType";
import axios from '../../axios-api'

export const fetchGallery_Success = gallery => ({type:FETCH_GALLERY_SUCCESS, gallery});
export const createGallerySuccess = () => ({type:CREATE_GALLERY_SUCCESS });

export const fetchGallery = (gallery) => {
    return dispatch => {
        return axios.get('/gallery', gallery).then(
            response => dispatch(fetchGallery_Success(response.data))
        )
    }
};


export const createGallery = productData => {
    return (dispatch) => {
        return axios.post('/gallery', productData).then(
            () => dispatch(createGallerySuccess())
        );
    };
};
