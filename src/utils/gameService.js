import tokenService from './tokenService';

const BASE_URL = '/api/games/';

//create a game request
export function create(game) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + tokenService.getToken()
                 },
        body: JSON.stringify(game)
    }).then(res => res.json());
}

//Get a list of requests for a paticular user
export function getRequests(user, status) {
    return fetch(BASE_URL + 'request', {
        method: 'POST',
        headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + tokenService.getToken()
                 },
        body: JSON.stringify({'user': user, 'status': status})
    }).then(res => res.json());
}

//Get a list of all open games
export function getOpen() {
    return fetch(BASE_URL + 'open/all/', {
        method: 'GET',
        headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + tokenService.getToken()
                 },
    }).then(res => res.json());
}

//function for goalie to join a game
export function joinGame(gameId, user) {
    return fetch(BASE_URL + `${gameId}` + '/add_goalie', {
        method: 'PUT',
        headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + tokenService.getToken()
                 },
        body: JSON.stringify({'user': user, 'game': gameId})
    }).then(res => {
        if (res.ok) return res.json();
        throw new Error('Can\'t Join: Check Your Skill Level or List of Sports')
    })
}

//function delete a game
export function deleteGame(gameId) {
    return fetch(BASE_URL + gameId, {
        method: 'DELETE'
    }).then(res => res.json());
}

//function confirm game
export function confirmGame(gameId) {
    return fetch(BASE_URL + `${gameId}` + '/confirm', {
        method: 'PUT',
        headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + tokenService.getToken()
                 },
    }).then(res => res.json());
}

//function to kick a goalie from a pending game
export function kickGame(gameId) {
    return fetch(BASE_URL + `${gameId}` + '/kick', {
        method: 'PUT',
        headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + tokenService.getToken()
                 },
    }).then(res => res.json());
}

//function to edit a game
export function editGame(game, arena) {
    return fetch(BASE_URL + `${game._id}`, {
        method: 'PUT',
        headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + tokenService.getToken()
                 },
        body: JSON.stringify({'game': game, 'arena': arena})
    }).then(res => res.json());
}

export function getGamesForGoalie(user, status) {
    return fetch(BASE_URL + 'goalie', {
        method: 'POST',
        headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + tokenService.getToken()
                 },
        body: JSON.stringify({'user': user, 'status': status})
    }).then(res => res.json());
}

