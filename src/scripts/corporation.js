import { getCorporations } from "./dataAccess.js"

export const Corporation = () => {

    const corporations = getCorporations()

    let html = ""
    html += corporations.map(corporation => {
        return `
        <section class="corporation">
            <header class="corporation__name">
                <h3>${corporation.name}</h3>
            </header>
            <div class="corporation__info">
                <div>Address: ${corporation.address}</div>
            </div>
        </section>
        `
    }).join("")

    return html
}