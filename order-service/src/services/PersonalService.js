const API = "http://localhost:8080/personal";

export async function userDetails(user) {
    const formData = new FormData();
    formData.append('id', user.id)
    return fetch(API + '/', {
        mode:'cors',
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: formData})
        .then(response => {
            return response.json()
        })
        .catch(err => alert(err))
}

export async function changeName(user) {
    const formData = new FormData();
    formData.append('id', user.id)
    formData.append('name', user.name)
    return fetch(API + '/changeName', {
        mode:'cors',
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: formData})
        .then(response => {
            return response.json()
        })
        .catch(err => alert(err))
}

export async function changePassword(user) {
    const formData = new FormData();
    formData.append('id', user.id)
    formData.append('password', user.password)
    return fetch(API + '/changePassword', {
        mode:'cors',
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: formData})
        .then(response => {
            return response.json()
        })
        .catch(err => alert(err))
}

export async function changeEmail(user) {
    const formData = new FormData();
    formData.append('id', user.id)
    formData.append('email', user.email)
    return fetch(API + '/changeEmail', {
        mode:'cors',
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: formData})
        .then(response => {
            return response.json()
        })
        .catch(err => alert(err))
}

export async function changePhoneNumber(user) {
    const formData = new FormData();
    formData.append('id', user.id)
    formData.append('phoneNumber', user.phoneNumber)
    return fetch(API + '/changePhoneNumber', {
        mode:'cors',
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: formData})
        .then(response => {
            return response.json()
        })
        .catch(err => alert(err))
}