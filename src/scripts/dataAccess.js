const applicationState = {}
const API = "http://localhost:3333"

let politicians = []
export const fetchPoliticians = () => {
    return fetch(`${API}/politicians`)
        .then(res => res.json())
        .then((allPoliticians) => {
            politicians = allPoliticians
        })
}

let corporations = []
export const fetchCorporations = () => {
    return fetch(`${API}/corporations`)
        .then(res => res.json())
        .then((allCorporations) => {
            corporations = allCorporations
        })
}

let PACs = []
export const fetchPACs = () => {
    return fetch(`${API}/PACs`)
        .then(res => res.json())
        .then((allPACs) => {
            PACs = allPACs
        })
}

let donations = []
export const fetchDonations = () => {
    return fetch(`${API}/donations`)
        .then(res => res.json())
        .then((allDonations) => {
            donations = allDonations
        })
}


export const getPoliticans = () => {
    return politicians.map(politician => ({...politician }))
}

export const getCorporations = () => {
    return corporations.map(corporation => ({...corporation }))
}

export const getPACs = () => {
    return PACs.map(PAC => ({...PAC }))
}

export const getDonations = () => {
    return donations.map(donation => ({...donation }))
}