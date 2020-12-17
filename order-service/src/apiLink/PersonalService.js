const API = "http://localhost:8080/personal";

export async function userDetails(user) {
    const formData = new FormData();
    formData.append('user', user)
    return await fetch(API + '/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData
    }).then((response => response.json()))
}

export async function changeName(user) {
    const formData = new FormData();
    formData.append('user', user)
    return await fetch(API + '/changeName', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData
    }).then((response => response.json()))
}

export async function changePassword(user) {
    const formData = new FormData();
    formData.append('user', user)
    return await fetch(API + '/changePassword', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData
    }).then((response => response.json()))
}

export async function changeEmail(user) {
    const formData = new FormData();
    formData.append('user', user)
    return await fetch(API + '/changeEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData
    }).then((response => response.json()))
}

export async function changePhoneNumber(user) {
    const formData = new FormData();
    formData.append('user', user)
    return await fetch(API + '/changePhoneNumber', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData
    }).then((response => response.json()))
}