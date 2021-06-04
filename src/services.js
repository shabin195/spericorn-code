import axios from "axios";

const postUrl = 'https://devgroceryapi.spericorn.com/api/auth/'
const getUrl = 'https://devgroceryapi.spericorn.com/api/'

export function postData(postData,endPoint) {   
    return axios.post(postUrl+endPoint, postData)
           .then((data) => data)
           .then((res) => res)
}

export function getData(token,endPoint) {
    return fetch(getUrl+endPoint, {
        method: 'GET',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
        }
    })
    .then((data) => data.json())
    .then((res) => res)
}

