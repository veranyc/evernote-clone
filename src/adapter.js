const baseUrl = 'http://localhost:3000/api/v1/'
const userId = 1

class Adapter {
  constructor (baseUrl) {
      this.baseUrl = baseUrl
  }

  getNotes(){
    return fetch(baseUrl + "notes")
    .then(res => res.json())
    .then(json => console.log(json))
  }

  addNote(title, body){
    let noteBody = {user_id: `${userId}`, title: `${title}`, body: `${body}`}
    let noteJSON = {
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify(noteBody)
  }
  fetch(baseUrl + "notes", noteJSON)
    .then(res => res.json())
    .then(json => console.log(json))
  }
}
