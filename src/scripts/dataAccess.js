const API = "http://localhost:3333"

let politicians = []
export const fetchPoliticians = () => {
    return fetch(`${API}/politicians`)
        .then(res => res.json())
        .then((allPoliticians) => {
            politicians = allPoliticians
        })
}

export const getPoliticans = () => {
    return politicians.map(politician => ({...politician }))
}