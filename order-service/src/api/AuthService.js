
const API = "http://localhost:8080";

let headers = new Headers();

headers.append('Content-Type', 'application/json; text/plain; charset=utf-8');
headers.append('Access', 'application/json; text/plain; charset=utf-8');

export async function signIn(user) {
    const formData = new FormData();
    formData.append('phoneNumber', user.phoneNumber)
    formData.append('password', user.password)
    return (await fetch(API + '/signin', {
        mode:'no-cors',
        method: 'POST',
        headers: headers,
        body: JSON.stringify(user)})
        .then(response => response.json())
        .then(data => {
            if(data.message()) {

            } else{
                localStorage.setItem("token", data.token)
                dispatch()
            }
        })
        .catch(err => alert(err)))
}

export async function signUpAsDriver(user) {
    const formData = new FormData();
    formData.append('phoneNumber', user.phoneNumber)
    formData.append('password', user.password)
    formData.append('email', user.email)
    formData.append('name', user.name)
    return (await fetch(API + '/signup/driver', {
        mode:'no-cors',
        method: 'POST',
        headers: headers,
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err)))
}

export async function signUpAsCustomer(user) {
    const formData = new FormData();
    formData.append('phoneNumber', user.phoneNumber)
    formData.append('password', user.password)
    formData.append('email', user.email)
    formData.append('name', user.name)
    return (await fetch(API + '/signup/customer', {
        mode:'no-cors',
        method: 'POST',
        headers: headers,
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err)))
}