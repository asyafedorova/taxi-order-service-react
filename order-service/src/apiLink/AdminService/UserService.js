const API = "http://localhost:8080/admin/users";

export async function getAll() {
    return await fetch(API + '/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response => response.json()))
}

export async function getById(id) {
    return await fetch(API + `/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response => response.json()))
}

export async function deleteUser(id) {
    return await fetch(API + `/${id}` + '/delete', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response => response.json()))
}

export async function changeUserName(id, user) {
    const formData = new FormData();
    formData.append('user', user);
    return await fetch(API + `/${id}` + '/changeName', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: formData
    }).then((response => response.json()))
}

export async function changeUserEmail(id, user) {
    const formData = new FormData();
    formData.append('user', user);
    return await fetch(API + `/${id}` + '/changeEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData
    }).then((response => response.json()))
}

export async function changeUserPassword(id, user) {
    const formData = new FormData();
    formData.append('user', user);
    return await fetch(API + `/${id}` + '/changePassword', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData
    }).then((response => response.json()))
}

export async function changeUserPhoneNumber(id, user) {
    const formData = new FormData();
    formData.append('user', user);
    return await fetch(API + `/${id}` + '/changePhoneNumber', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData
    }).then((response => response.json()))
}

export async function changeUserRole(id, user) {
    const formData = new FormData();
    formData.append('user', user);
    return await fetch(API + `/${id}` + '/changeRole', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData
    }).then((response => response.json()))
}