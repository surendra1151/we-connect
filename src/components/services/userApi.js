import http from './httpService';
const apiEndpoint="https://reqres.in/api"+"/users/2";


export function Register(user){
    return http.post(apiEndpoint,
        {
            firstname:user.firstname,
            lastname:user.lastname,
            email:user.email,
            password:user.password,
            phonenumber:user.phonenumber
        });
}
