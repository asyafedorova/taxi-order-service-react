const API = "http://localhost:8080";

export async function signIn(user) {
    const formData = new FormData();
    formData.append('user', user)
    return await fetch(API + '/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData
    }).then((response => response.json()))
}

export async function signUpAsDriver(user) {
    const formData = new FormData();
    formData.append('user', user)
    return await fetch(API + '/signup/driver', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData
    }).then((response => response.json()))
}

export async function signUpAsCustomer(user) {
    const formData = new FormData();
    formData.append('user', user)
    return await fetch(API + '/signup/customer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData
    }).then((response => response.json()))
}