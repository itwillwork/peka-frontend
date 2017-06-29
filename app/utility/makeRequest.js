/*
Утилита для отправки запросов под redux
 request = {
    promise // promise запроса
    types // типы экшенов [начальный, успешный, ошибочный]
 }
 */

export default (request) => {
    const {types: TYPES, promise } = request;
    return (dispatch, getState) => {
        dispatch({type: TYPES[0]});
        return promise()
            .then(
                (res) => {
                    if (res.status === 200) {
                        return dispatch({type: TYPES[1], payload: res.body})
                    }
                    dispatch({type: TYPES[2], payload: res})
                },
                (err) => dispatch({type: TYPES[2], payload: err}),
            )
    }
};