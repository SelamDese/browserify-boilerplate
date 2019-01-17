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
                <label for="interestName">Name:</label>
                <input id="interestName" name="new-interest" type="text" />
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
    let submitButton = document.createElement("button")
    submitButton.textContent = "Add Interest"
    submitButton.setAttribute("class", "interest")
    outputArticle.appendChild(submitButton)
    submitButton.addEventListener("click", travelForm.handleAddInterest)
    },
    handleAddInterest () {

        let inputTravelInterestName = document.querySelector("#interestName").value
        let inputTravelInterestDescription = document.querySelector("#description").value
        let inputTravelInterestCost = document.querySelector("#cost").value
        let inputTravelInterestPlace = document.querySelector("#placesId").value

        let travelInterest = {
          name: inputTravelInterestName,
          description: inputTravelInterestDescription,
          cost: inputTravelInterestCost,
          placeId: inputTravelInterestPlace
        }
        travelFetch.postInterest(travelInterest)
}
}
export default travelForm