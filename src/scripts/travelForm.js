// this module creates and appends travle interest input form
import travelFetch from "./travelFetch"
const travelForm = {
    createAndAppendForm() {
        // create input form
        let htmlOptionTag =""
        let inputForm = `
        <article>
        <h2>add your travle interest </h2>
            <section>
                <label for="new-interest">Name:</label>
                <input id="new-interest" name="new-interest" type="text" />
            </section>
            <section>
                <label for="description">Description:</label>
                <textArea id="description" name="description" type="text" ></textArea>
            </section>
            <section>
                <label for="cost">cost:</label>
                <input id="cost" name="cost" type="text" />
            </section>
            <section>
                <label for="placesId">place:</label>
                <select id="placesId">${htmlOptionTag}</select>
            </section>
        </article>
            `
            const outputArticle = document.querySelector(".output")
            outputArticle.innerHTML = inputForm
    let placesId=document.querySelector("#placesId")
    travelFetch.getAllPlaces()
    .then(arrayofPlaces=>{
        console.log(arrayofPlaces)
        arrayofPlaces.forEach(place => {
            htmlOptionTag +=`<option value=${place.id}>${place.name}</option>`
            placesId.innerHTML=htmlOptionTag
        })})
    }
}
export default travelForm