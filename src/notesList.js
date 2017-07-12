class NotesList {
  constructor(){
    this.notes = []
  }

  addNote(title, body) {
    const newNote = new Note(title, body)
    this.notes.push(newNote)
  }

  // updateNote(title, body, noteId){
  //   let findNote = this.notes.filter(note => note.noteId === noteId)
  //   findNote.title = title
  //   findNote.body = body
  //   this.note = findNote
  //   this.notes.push(this.note)
  // }

  renderSideBar() {
    return this.notes.map(note => note.renderSideBarNote()).join('')
  }

  render() {
    return this.notes.map(note => note.render()).join('')
  }

}
