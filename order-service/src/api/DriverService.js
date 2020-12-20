const API = "http://localhost:8080/personal/driver";

export async function showAllOrders(user) {
    const formData = new FormData();
    formData.append('user', user)
    return await fetch(API + '/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function showAllStandbyOrders(user) {
    return await fetch(API + '/orders/standby', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function linkCar(user, car) {
    const formData = new FormData();
    formData.append('user', user)
    formData.append('car', car)
    return await fetch(API + '/orders/linkCar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function takeOrder(user, id) {
    const formData = new FormData();
    formData.append('id', user.id)
    return await fetch(API + '/orders/standby' + `/${id}` + 'takeOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function showActiveOrders(user) {
    const formData = new FormData();
    formData.append('id', user.id)
    return await fetch(API + '/orders/active', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function showActiveOrderDetails(user, id) {
    const formData = new FormData();
    formData.append('id', user.id)
    return await fetch(API + '/orders/active' + `/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function completeOrder(user, id) {
    const formData = new FormData();
    formData.append('id', user.id)
    return await fetch(API + '/orders/active' + `/${id}` + 'completeOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function showCompletedOrders(user) {
    const formData = new FormData();
    formData.append('id', user.id)
    return await fetch(API + '/orders/completed', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}



