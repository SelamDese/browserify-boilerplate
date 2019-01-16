import travelFetch from "./travelFetch"
import travelCreateObject from "./travelCreateObject"

const travelList = {
  addTravelToInterestList(){
    travelFetch.getAllInterest()
    .then(interestsArray => {
      let foodDocFragment = document.createDocumentFragment()
      interestsArray.forEach(interest => {
        let travelInterestHtml = travelCreateObject.travleInterestBuilder(interest)
        foodDocFragment.appendChild(travelInterestHtml)
      })
      let outputArticle = document.querySelector(".output")
      outputArticle.appendChild(foodDocFragment)

    })
  }
}

export default travelList