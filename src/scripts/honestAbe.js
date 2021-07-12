import { Politician } from "./politician.js"
import { Corporation } from "./corporation.js"
import { PAC } from "./PAC.js"

export const HonestAbe = () => {
    return `
    <article class="politicians">
    <h1>Politicians</h1>
        ${Politician()}
    </article>

    <article class="corporations">
    <h1>Corporations</h1>
        ${Corporation()}
    </article>

    <article class="pacs">
    <h1> Political Action Committees (PACs)</h1>
        ${PAC()}
    </article>

`
}