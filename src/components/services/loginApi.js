import http from './httpService';

const apiEndpoint="https://reqres.in/api"+"/register";


export function login(email,password){
    return http.post(apiEndpoint,{email,password});

}