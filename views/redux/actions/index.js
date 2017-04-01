import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_ERROR, SELECT_DATA } from '../constant/data';

export function getData() {
    return (dispatch) => {
        dispatch({
            type: GET_DATA_REQUEST
        });

        let promise = new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            let path = 'api?data=data';

            xhr.open("get", path, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            xhr.onreadystatechange = () => {

                if (xhr.readyState !== 4) return;

                if (xhr.status !== 200) {
                    reject(xhr.status + ': ' + xhr.statusText)
                } else {
                    resolve(xhr.responseText);
                }
            };

            xhr.send();
        });

        promise.then((value) => {
            dispatch({
                type: GET_DATA_SUCCESS,
                data: value
            })
        }).catch((value) => {
            dispatch({
                type: GET_DATA_ERROR,
                error: true
            })
        });
    }
}

export function selectData(selectedData) {
    return {
        type: SELECT_DATA,
        selectedData: selectedData
    }
}
