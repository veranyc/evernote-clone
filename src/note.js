class Note{
  constructor(title, body, noteId){
    this.title = title
    this.body = body
    this.noteId = noteId
  }

  renderSideBarNote() {
    return (`<a class="item" data-id=${this.noteId}>
            <h3>${this.title}</h3><br>
            <p>${this.body.slice(0,20)}...</p>
            </a>`)
  }

  render() {
    return (`<div class='regclass' id=${this.id}>
            <h2>${this.title}</h2><br>
            <p>${this.body}</p><br>
            </div>`)
  }

}
