class User {
  constructor(username, userId){
    this.username = username
    this.userId = 1
    this.notes = []
  }

  render(){
    return `<p>${this.username}</p>`
  }
}
