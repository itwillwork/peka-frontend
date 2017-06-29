import T from './type'
import endPoints from '../../constants';
import superagent from 'superagent';
import makeRequest from '../../utility/makeRequest';

export const getUser = () =>
    makeRequest({
        promise: () => {
            return superagent
                .get(`${endPoints.getUser}`)
                .send({
                    '_': Math.random()
                });
        },
        types: [T.GET_USER, T.GET_USER_SUCCESS, T.GET_USER_FAIL],
    });