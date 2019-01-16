// fetch module
const travelFetch = {
    getAllPlaces() {
        // GET
    return fetch("http://localhost:8088/places")
    .then(response => response.json())
  },
    getAllInterest() {
        // GET
    return fetch("http://localhost:8088/interests")
    .then(response => response.json())
  },
  // POST
  postInterest(newArticleToSave) {
      return fetch("http://localhost:8088/interests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newArticleToSave)
      })
  },
getPlaceOfInterest() {
  return fetch("http://localhost:8088/places")
.then(response => response.json())    
.then(parcedPlaces => {
    parcedPlaces.forEach(place => {       
    let travelInterestName= `${place.name}`
fetch(`http://localhost:8088/interests/${place.placesId}`)
.then(response => response.json())    
.then(parsedresponse => {
     `${parsedresponse.name}`
})
})
})
}
}
export default travelFetch