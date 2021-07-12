import { getDonations, getPACs } from "./dataAccess.js";

export const PAC = () => {
        const PACs = getPACs()
        const donations = getDonations()

        let html = ""
        html += PACs.map(PAC => {
                    return `
        <section class="pac">
        <header class="pac__name">
            <h3>${PAC.name}</h3>
        </header>
        <div class="pac__info">
            <div>Address: ${PAC.address}</div>
        </div>
        <div class="pac__donors">
            <h4>Donors</h4>
            <ul>
                ${
                    donations.map(donation => {
                        return `
                        <li>${donation.donor} (${donation.amount})</li>
                        `
                    }).join("")
                }
            </ul>
        </div>
    </section>
        `
    })
    return html
}