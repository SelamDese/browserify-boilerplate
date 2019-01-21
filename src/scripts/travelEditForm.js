import travelFetch from "./travelFetch"
import travelList from "./travelList"

const interestEditForm = {

  createAndAppendForm (articleId, interestObjToEdit) {
    //cost
    let interestCostField = document.createElement("p")

    let interestCostLabel = document.createElement("label")
    interestCostLabel.textContent = "Cost"
    let interestCostInput = document.createElement("input")
    interestCostInput.value = interestObjToEdit.cost

    interestCostField.appendChild(interestCostLabel)
    interestCostField.appendChild(interestCostInput)
    // review
    let interestReviewField = document.createElement("p")

    let interestReviewLabel = document.createElement("label")
    interestReviewLabel.textContent = "review"
    let interestReviewInput = document.createElement("input")
    interestReviewInput.value = interestObjToEdit.review

    interestReviewField.appendChild(interestReviewLabel)
    interestReviewField.appendChild(interestReviewInput)

    let updateButton = document.createElement("button")
    updateButton.textContent = "Update"

    updateButton.addEventListener("click", () => {
    let editedInterest = {
        cost: interestCostInput.value,
        review: interestReviewInput.value
    }
      travelFetch.putExistingInterest(interestObjToEdit.id, editedInterest)
      .then(response => {
        travelList.addTravelToInterestList()
      })
    })

    let interestItemArticle = document.querySelector(`#${articleId}`)

    while (interestItemArticle.firstChild) {
        interestItemArticle.removeChild(interestItemArticle.firstChild);
    }
    interestItemArticle.appendChild(interestCostField)
    interestItemArticle.appendChild(interestReviewField)
    interestItemArticle.appendChild(updateButton)
  }
}
export default interestEditForm