import { fetchPoliticians } from "./dataAccess.js"
import { HonestAbe } from "./honestAbe.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchPoliticians().then(() => {
        mainContainer.innerHTML = HonestAbe()
    })
}
render()