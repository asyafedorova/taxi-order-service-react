const API = "http://localhost:8080/personal";

export async function userDetails(user) {
    const formData = new FormData();
    formData.append('id', user.id)
    return await fetch(API + '/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function changeName(user) {
    const formData = new FormData();
    formData.append('id', user.id)
    formData.append('name', user.name)
    return await fetch(API + '/changeName', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function changePassword(user) {
    const formData = new FormData();
    formData.append('id', user.id)
    formData.append('password', user.password)
    return await fetch(API + '/changePassword', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function changeEmail(user) {
    const formData = new FormData();
    formData.append('id', user.id)
    formData.append('email', user.email)
    return await fetch(API + '/changeEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function changePhoneNumber(user) {
    const formData = new FormData();
    formData.append('id', user.id)
    formData.append('phoneNumber', user.phoneNumber)
    return await fetch(API + '/changePhoneNumber', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}