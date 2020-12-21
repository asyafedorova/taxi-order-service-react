const API = "http://localhost:8080/admin/users";


export async function getAllUsers() {
    return fetch(API + '/', {
        mode:'cors',
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }})
        .then(response => {
            return response.json()
        })
}

export async function getUserById(id) {
    return fetch(API + `/${id}`, {
        mode:'cors',
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }})
        .then(response => {
            return response.json()
        })
}

export async function deleteUser(id) {
    return fetch(API + `/${id}` + '/delete', {
        mode:'cors',
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }})
        .then(response => {
            return response.ok;
        })
}

export async function changeUserName(id, user) {
    const formData = new FormData();
    formData.append('name', user.name)
    return fetch(API + `/${id}` + '/changeName', {
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

export async function changeUserEmail(id, user) {
    const formData = new FormData();
    formData.append('email', user.email)
    return fetch(API + `/${id}` + '/changeEmail', {
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

export async function changeUserPassword(id, user) {
    const formData = new FormData();
    formData.append('password', user.password)
    return fetch(API + `/${id}` + '/changePassword', {
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

export async function changeUserPhoneNumber(id, user) {
    const formData = new FormData();
    formData.append('phoneNumber', user.phoneNumber)
    return fetch(API + `/${id}` + '/changePhoneNumber', {
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

export async function changeUserRole(id, user) {
    const formData = new FormData();
    formData.append('role', user.role)
    return fetch(API + `/${id}` + '/changeRole', {
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