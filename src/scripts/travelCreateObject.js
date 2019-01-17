//
const travelCreateObject = {
    travleInterestBuilder(travelInterestObject) {
        console.log(travelInterestObject)
      let travleInterestArticle = document.createElement("article")
      let travelName = document.createElement("h3")
      travelName.textContent = travelInterestObject.name
      let traveldescription = document.createElement("p")
      traveldescription.textContent = travelInterestObject.description
      let travelCost = document.createElement("p")
      travelCost.textContent = travelInterestObject.cost
      let travelPlaces = document.createElement("p")
      travelPlaces.textContent = travelInterestObject.placesId
      travleInterestArticle.appendChild(travelName)
      travleInterestArticle.appendChild(traveldescription)
      travleInterestArticle.appendChild(travelCost)
      return travleInterestArticle
    }
  }
  export default travelCreateObject