import travelFetch from "./travelFetch";
import travelList from "./travelList";
import travelEditForm from "./travelEditForm"
//
// import travelFetch from "./travelFetch"
const travelCreateObject = {
    travleInterestBuilder(travelInterestObject) {
      let travleInterestArticle = document.createElement("article")
      travleInterestArticle.setAttribute("id", `interests--${travelInterestObject.id}`)
      // name
      let travelName = document.createElement("h3")
      travelName.textContent = `Name:${travelInterestObject.name}`
      // description
      let traveldescription = document.createElement("p")
      traveldescription.textContent = `Description:${travelInterestObject.description}`
      // cost
      let travelCost = document.createElement("p")
      travelCost.textContent = `Cost:${travelInterestObject.cost}`
      // review
      let travelReview = document.createElement("p")
      travelReview.textContent = `Review:${travelInterestObject.review}`
      // place
      travelCreateObject.getPlaceofInterest(travelInterestObject)
      .then(parsedresponse => {
          let placeName= parsedresponse.name
          let travelPlace = document.createElement("p")
          travelPlace.textContent = `place:${placeName}`
          //  append travel place
          travleInterestArticle.appendChild(travelPlace)
        })
      // edit button
      let editInterestButton = document.createElement("button")
      editInterestButton.textContent = "Edit"
      // edit eventListener
      editInterestButton.addEventListener("click", () => {
        let articleId = event.target.parentNode.id
        let interestsId = articleId.split("--")[1]
        travelFetch.getInterest(interestsId)
        .then(response => {
          travelEditForm.createAndAppendForm(articleId, response)
        })
      })
      // delete button
      let deleteInterestButton = document.createElement("button")
      deleteInterestButton.textContent = "Delete"
      deleteInterestButton.setAttribute("id", `interests--${travelInterestObject.id}`)
      // delete eventListener
      deleteInterestButton.addEventListener("click", () => {
        let interestsId = event.target.id.split("--")[1]
      alert("are you sure you want to delete")
      travelFetch.deleteInterest(interestsId)
      .then(response => {
        travelList.addTravelToInterestList()
      })
    })
    travleInterestArticle.appendChild(travelName)
    travleInterestArticle.appendChild(traveldescription)
    travleInterestArticle.appendChild(travelCost)
    travleInterestArticle.appendChild(travelReview)
    travleInterestArticle.appendChild(editInterestButton)
    travleInterestArticle.appendChild(deleteInterestButton)
    return travleInterestArticle
  },
  getPlaceofInterest(interest){
          return fetch(`http://localhost:8088/places/${interest.placeId}`)
          .then(response => response.json())
    }
  }
  export default travelCreateObject