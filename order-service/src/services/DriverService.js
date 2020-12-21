const API = "http://localhost:8080/personal/driver";

export async function showAllOrders(user) {
    const formData = new FormData();
    formData.append('user', user)
    return fetch(API + '/orders', {
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

export async function showAllStandbyOrders(user) {
    return fetch(API + '/orders/standby', {
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
        .catch(err => alert(err))
}

export async function linkCar(user, car) {
    const formData = new FormData();
    formData.append('user', user)
    formData.append('car', car)
    return fetch(API + '/orders/linkCar', {
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

export async function takeOrder(user, id) {
    const formData = new FormData();
    formData.append('id', user.id)
    return fetch(API + '/orders/standby' + `/${id}` + 'takeOrder', {
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

export async function showActiveOrders(user) {
    const formData = new FormData();
    formData.append('id', user.id)
    return fetch(API + '/orders/active', {
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

export async function showActiveOrderDetails(user, id) {
    const formData = new FormData();
    formData.append('id', user.id)
    return fetch(API + '/orders/active' + `/${id}`, {
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

export async function completeOrder(user, id) {
    const formData = new FormData();
    formData.append('id', user.id)
    return fetch(API + '/orders/active' + `/${id}` + 'completeOrder', {
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

export async function showCompletedOrders(user) {
    const formData = new FormData();
    formData.append('id', user.id)
    return fetch(API + '/orders/completed', {
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



