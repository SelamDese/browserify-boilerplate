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
}
export default travelFetch