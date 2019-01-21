import travelFetch from "./travelFetch"
import travelCreateObject from "./travelCreateObject"

const travelList = {
  addTravelToInterestList() {
    travelFetch.getAllInterest()
    .then(interestsArray => {
      let travelInterestDocFragment = document.createDocumentFragment()
      interestsArray.forEach(interest => {
        let travelInterestHtml = travelCreateObject.travleInterestBuilder(interest)
        travelInterestDocFragment.appendChild(travelInterestHtml)
      })
      let outputArticle2 = document.querySelector(".output2")
      while (outputArticle2.firstChild) {
        outputArticle2.removeChild(outputArticle2.firstChild);
      }
      outputArticle2.appendChild(travelInterestDocFragment)
    })
  }
}

export default travelList