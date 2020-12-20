const API = "http://localhost:8080/admin/users";

export async function getAllUsers() {
    return await fetch(API + '/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function getUserById(id) {
    return await fetch(API + `/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function deleteUser(id) {
    return await fetch(API + `/${id}` + '/delete', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function changeUserName(id, user) {
    const formData = new FormData();
    formData.append('name', user.name)
    return await fetch(API + `/${id}` + '/changeName', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function changeUserEmail(id, user) {
    const formData = new FormData();
    formData.append('email', user.email)
    return await fetch(API + `/${id}` + '/changeEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function changeUserPassword(id, user) {
    const formData = new FormData();
    formData.append('password', user.password)
    return await fetch(API + `/${id}` + '/changePassword', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function changeUserPhoneNumber(id, user) {
    const formData = new FormData();
    formData.append('phoneNumber', user.phoneNumber)
    return await fetch(API + `/${id}` + '/changePhoneNumber', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function changeUserRole(id, user) {
    const formData = new FormData();
    formData.append('role', user.role)
    return await fetch(API + `/${id}` + '/changeRole', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}