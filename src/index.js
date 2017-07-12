$(document).ready(function(){
  const newNote = new Note()
  const notesList = new NotesList()
  let newAdp = new Adapter()
  addNewNote(newAdp, notesList)
  // updateThisNote(notesList)
})

function addNewNote(adapter, notesList) {
  $("#addbtn").on("click", function(){
    event.preventDefault()
    // debugger
    let newTitle = $("#notetitle").val()
    let newBody = $("#notebody").val()
    notesList.addNote(newTitle, newBody)
    adapter.addNote(newTitle, newBody)
    $("#notes-list").html(notesList.render())
    $("#side-bar-notes").html(notesList.renderSideBar())
    $("#notetitle").val('')
    $("#notebody").val('')
  })
}

// function updateThisNote(notesList)){
//   $("#updatebtn").on("click", function(event){
//     event.preventDefault()
//     let updTitle = ${"#notetitle"}.val()
//     let updBody = $("#notebody").val()
//     let searchId = $("#noteid").val()
//     notesList.updateNote(updTitle, updBody, searchId)
//     $("#notes-list").html(notesList.render())
//     $("#side-bar-notes").html(notesList.renderSideBarNote())
//     $("#notetitle").val('')
//     $("#notebody").val('')
//   })
// }
