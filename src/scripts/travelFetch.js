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
    // /?_expand=places
    .then(response => response.json())
  },
  // POST
    postInterest(newinterestToSave) {
      return fetch("http://localhost:8088/interests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newinterestToSave)
      })
  },
  // delete
    deleteInterest(interestsId) {
    return fetch(`http://localhost:8088/interests/${interestsId}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      }
    })
  },
  //
    getInterest(interestsId) {
    return fetch(`http://localhost:8088/interests/${interestsId}`)
    .then(response => response.json())
  },
    putExistingInterest(interestsId, interestToEdit) {
    return fetch(`http://localhost:8088/interests/${interestsId}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(interestToEdit)
    })
}
}
export default travelFetch
