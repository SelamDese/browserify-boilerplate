//
const travelCreateObject = {
    travleInterestBuilder(travelInterestObject) {
      let travleInterestArticle = document.createElement("article")
      let travelName = document.createElement("h3")
      travelName.textContent = travelInterestObject.name
      let traveldescription = document.createElement("p")
      traveldescription.textContent = travelInterestObject.description
      let travelCost = document.createElement("p")
      travelCost.textContent = travelInterestObject.cost
      travleInterestArticle.appendChild(travelName)
      travleInterestArticle.appendChild(traveldescription)
      travleInterestArticle.appendChild(travelCost)
      return travleInterestArticle
    }
  }
  export default travelCreateObject