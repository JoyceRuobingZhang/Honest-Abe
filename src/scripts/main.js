import { fetchCorporations, fetchDonations, fetchPACs, fetchPoliticians } from "./dataAccess.js"
import { HonestAbe } from "./honestAbe.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchPoliticians().then(() => {
        fetchCorporations().then(() => {
            fetchPACs().then(() => {
                fetchDonations().then(() => {
                    mainContainer.innerHTML = HonestAbe()
                })

            })

        })
    })
}
render()