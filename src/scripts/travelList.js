import travelFetch from "./travelFetch"
import travelCreateObject from "./travelCreateObject"

const travelList = {
  addTravelToInterestList(){
    travelFetch.getAllInterest()
    .then(interestsArray => {
      let travelInterestDocFragment = document.createDocumentFragment()
      interestsArray.forEach(interest => {
        let travelInterestHtml = travelCreateObject.travleInterestBuilder(interest)
        travelInterestDocFragment.appendChild(travelInterestHtml)
      })
      let outputArticle = document.querySelector(".output")
      outputArticle.appendChild(travelInterestDocFragment)

    })
  }
}

export default travelList