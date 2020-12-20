const API = "http://localhost:8080/personal/customer";

export async function getAllOrdersOfUser(user) {
    const formData = new FormData();
    formData.append('id', user.id)
    return await fetch(API + '/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function createOrder(user, order) {
    const formData = new FormData();
    formData.append('user', user)
    formData.append('order', order)
    return await fetch(API + '/orders/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function findOrderById(user, id) {
    const formData = new FormData();
    formData.append('id', user)
    return await fetch(API + '/orders' + `/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function rateDriver(user, rating, id) {
    const formData = new FormData();
    formData.append('user', user)
    formData.append('rating', rating)
    return await fetch(API + '/orders' + `/${id}` + '/rateDriver', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function showAllCardsOfCustomer(user) {
    const formData = new FormData();
    formData.append('id', user.id)
    return await fetch(API + '/cards', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function linkCard(user, card) {
    const formData = new FormData();
    formData.append('user', user)
    formData.append('card', card)
    return await fetch(API + '/cards/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function findCardById(user, id) {
    const formData = new FormData();
    formData.append('id', user.id)
    return await fetch(API + '/cards/' + `/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function changeNumber(user, card, id) {
    const formData = new FormData();
    formData.append('user', user)
    formData.append('card', card);
    return await fetch(API + '/cards/' + `/${id}` + '/changeNumber', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function changeHolder(user, card, id) {
    const formData = new FormData();
    formData.append('user', user)
    formData.append('card', card);
    return await fetch(API + '/cards/' + `/${id}` + '/changeHolder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function changeValidDate(user, card, id) {
    const formData = new FormData();
    formData.append('user', user)
    formData.append('card', card);
    return await fetch(API + '/cards/' + `/${id}` + '/changeValidDate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function changeCvv(user, card, id) {
    const formData = new FormData();
    formData.append('user', user)
    formData.append('card', card);
    return await fetch(API + '/cards/' + `/${id}` + '/changeCvv', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}

export async function deleteCard(user, card, id) {
    const formData = new FormData();
    formData.append('user', user)
    formData.append('card', card);
    return await fetch(API + '/cards/' + `/${id}` + '/delete', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData})
        .then(response => response.json())
        .catch(err => alert(err))
}






