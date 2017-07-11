$(document).ready(function(){
  const newNote = new Note()
  addNewNote(notesList)
  // updateThisNote(notesList)
})

function addNewNote(notesList) {
  $("#addbtn").on("click", function(){
    event.preventDefault()
    let newTitle = ${"#notetitle"}.val()
    let newBody = $("#notebody").val()
    let newNoteNum = $("#noteid").val()
    notesList.addNote(newTitle, newNote, newNoteNum)
    $("#notes-list").html(notesList.render())
    $("#side-bar-notes").html(notesList.renderSideBarNote())
    $("#notetitle").val('')
    $("#notebody").val('')
    $("#noteid").val('')
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
}
