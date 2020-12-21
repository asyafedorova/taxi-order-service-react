const API = "http://localhost:8080";

export async function signIn(user) {
    const formData = new FormData();
    formData.append('phoneNumber', user.phoneNumber)
    formData.append('password', user.password)
    return fetch(API + '/signin', {
        mode:'cors',
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: formData})
        .then(response => {
            return response.ok;
        })
        .catch(err => alert(err))
}

export async function signUpAsDriver(user) {
    const formData = new FormData();
    formData.append('phoneNumber', user.phoneNumber)
    formData.append('password', user.password)
    formData.append('email', user.email)
    formData.append('name', user.name)
    return fetch(API + '/signup/driver', {
        mode:'no-cors',
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': "DELETE, POST, GET, OPTIONS"
        },
        body: formData})
        .catch(err => alert(err))
}

export async function signUpAsCustomer(user) {
    const formData = new FormData();
    formData.append('phoneNumber', user.phoneNumber)
    formData.append('password', user.password)
    formData.append('email', user.email)
    formData.append('name', user.name)
    return fetch(API + '/signup/customer', {
        mode:'cors',
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: formData})
        .catch(err => alert(err))
}