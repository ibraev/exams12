import {REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS} from "./actionsType";
import axios from '../../axios-api'
import {push} from 'connected-react-router';
import {NotificationManager} from 'react-notifications';
const registerUserSuccess = user => ({type: REGISTER_USER_SUCCESS, user});
const registerUserFailure = error => ({type: REGISTER_USER_FAILURE, error});


export const registerUser = userData => {
    return dispatch => {
        return axios.post('/users', userData).then(
            response => {
                dispatch(registerUserSuccess(response.data.user));
                NotificationManager.success('Registered successfully!');
                dispatch(push('/'));
            },
            error => {
                if (error.response) {
                    dispatch(registerUserFailure(error.response.data));
                } else {
                    dispatch(registerUserFailure({global: 'No connection'}));
                }
            }
        )
    }
};
