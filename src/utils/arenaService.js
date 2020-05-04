const BASE_URL = '/api/arenas/';

//get a list of areans in a particular city
export function getArenasByCity(city) {
    return fetch(BASE_URL + 'city', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({'city': city})
    }).then(res => res.json());
}

