const BASE_URL = '/api/games/';

//create a game request
export function create(game) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(game)
    }).then(res => res.json());
}

export function getRequests(user, status) {
    return fetch(BASE_URL + 'request', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({'user': user, 'status': status})
    }).then(res => res.json());
}

