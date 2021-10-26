import axios from "axios";
import {samples} from "/home/vesko/hivebox/src/api/samples";
import { TimeRange } from "pondjs";

/* export function getSamples(id) {
    const promise = new Promise((resolve, reject) => {
        resolve(samples.filter((element) => element.hive === id));
    })
    return promise;
} */

export function getSamples(id, timerange) {
    return axios.get('samples', { params: { sample1: timerange.begin(), 
            sample2: timerange.end(), 
            hive: id}});
}

export function getInfo() {
    return axios.get('info/');
}

export function saveRecord(record) {
    return axios.post('card/', record);
}

export function signUp(firstname, lastname, user, pass) {
    const record =  {
        firstName: firstname,
        lastName: lastname,
        user: user,
        password:pass
    };
    //console.log("Invoked wordsdb.signUp, record:" +JSON.stringify(record));
    return axios.post('signup/', record);
}

export function login(user, pass) {
    const record =  {
        user: user,
        password:pass
    };
    //console.log("Invoked wordsdb.login, record:" +JSON.stringify(record));
    return axios.post('login/', record);
}

export function signOut() {
    return axios.get('logout/');
}

export function getAllforUser(user) {
    const res = axios.get('cards/'+ String(user), {params: {order: "asc"}});
    return res.then(res => {
        //console.log(JSON.stringify(res));
        return res.data.map( doc => {
            let timeIndex = doc._id.indexOf('&') +1;
            let time = doc._id.substr(timeIndex);
            return {...doc, _id: time}
        })
    })
}

export function getLast5forUser(user) {
    const res = axios.get('cards/'+ String(user), {params:{limit: 5, order: "desc"}});
    return res.then(res => {
        //console.log(JSON.stringify(res));
        return res.data.map( doc => {
            let timeIndex = doc._id.indexOf('&') +1;
            let time = doc._id.substr(timeIndex);
            return {...doc, _id: new Date(time).toLocaleString()}
        })
    })
}
