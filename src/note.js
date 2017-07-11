class Note{
  constructor(title, body, noteId){
    this.title = title
    this.body = body
    this.noteId = noteId
  }

  renderSideBarNote() {
    return (`<div class='sidebarclass' id=${this.noteId}>
            <span>${this.title}</span><br>
            <span>${this.body.slice(0,40)}...</span><br>
            <button class='fullnote' data-id=${this.noteId}>Full note</button><br>
            </div>`)
  }

  render() {
    return (`<div class='regclass' id=${this.id}>
            <span>${this.title}</span><br>
            <span>${this.body}</span><br>
            </div>`)
  }
  
}


































renderSideBarNote() {
  return (` <div class='ol-sm-4'style='border: 2px solid black;' id=${this.id}>
          <span style="color:#DF0101; font-weight: bold;">${this.title}</span>
          <br>
          <span>${this.body.slice(0,33)}...</span>
          <br>
          <button class='details' data-id=${this.id}>Details</button>
          <i class="glyphicon glyphicon-remove"></i>
          <br></div>`)
}

renderLong() {
  return (` <div class='col-sm-8' id=${this.id}>
          <span style="color:red">${this.title}</span>
          <br>
          <span>${this.body}</span>
          <br></div>`)
}

render(){
  return `<li>${this.title}<br>${this.body}</li>`
}
