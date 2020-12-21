const API = "http://localhost:8080/personal/customer";

export async function getAllOrdersOfUser(user) {
    const formData = new FormData();
    formData.append('id', user.id)
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

export async function createOrder(user, order) {
    const formData = new FormData();
    formData.append('user', user)
    formData.append('order', order)
    return fetch(API + '/orders/create', {
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

export async function findOrderById(user, id) {
    const formData = new FormData();
    formData.append('id', user)
    return fetch(API + '/orders' + `/${id}`, {
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

export async function rateDriver(user, rating, id) {
    const formData = new FormData();
    formData.append('user', user)
    formData.append('rating', rating)
    return fetch(API + '/orders' + `/${id}` + '/rateDriver', {
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

export async function showAllCardsOfCustomer(user) {
    const formData = new FormData();
    formData.append('id', user.id)
    return fetch(API + '/cards', {
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

export async function linkCard(user, card) {
    const formData = new FormData();
    formData.append('user', user)
    formData.append('card', card)
    return fetch(API + '/cards/create', {
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

export async function findCardById(user, id) {
    const formData = new FormData();
    formData.append('id', user.id)
    return fetch(API + '/cards/' + `/${id}`, {
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

export async function changeNumber(user, card, id) {
    const formData = new FormData();
    formData.append('user', user)
    formData.append('card', card);
    return fetch(API + '/cards/' + `/${id}` + '/changeNumber', {
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

export async function changeHolder(user, card, id) {
    const formData = new FormData();
    formData.append('user', user)
    formData.append('card', card);
    return fetch(API + '/cards/' + `/${id}` + '/changeHolder', {
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

export async function changeValidDate(user, card, id) {
    const formData = new FormData();
    formData.append('user', user)
    formData.append('card', card);
    return fetch(API + '/cards/' + `/${id}` + '/changeValidDate', {
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

export async function changeCvv(user, card, id) {
    const formData = new FormData();
    formData.append('user', user)
    formData.append('card', card);
    return fetch(API + '/cards/' + `/${id}` + '/changeCvv', {
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

export async function deleteCard(user, card, id) {
    const formData = new FormData();
    formData.append('user', user)
    formData.append('card', card);
    return fetch(API + '/cards/' + `/${id}` + '/delete', {
        mode:'cors',
        method: 'DELETE',
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






