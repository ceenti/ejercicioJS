var rockJson = []

//Listener activa cada que se da click en el botón
document.getElementById("buttonCute").addEventListener("click", () => {
  let name = document.getElementById("name").value
  let lastname = document.getElementById("lastname").value
  if (name === "" || lastname === "") {
    alert("Registro inválido: Ambos campos deben estar completos")
  }
  else {
    let rockEntry = { name, lastname }
    rockJson.push(rockEntry)
    console.log(rockJson)
    displayingList()
  }
})

const displayingList = () => {
  document.getElementById("girlsRules").innerHTML = ""
  rockJson.forEach(rocker => {
    let currentContent = document.getElementById("girlsRules").innerHTML
    let displayName
    let completeName = rocker.name + " " + rocker.lastname
    completeName.length <= 15 ? displayName = completeName : displayName = completeName.slice(0, 15) + "..."
    console.log(displayName)
    let newItem = `<li class="list-group-item list-group-item-info m-1 rounded"> ${displayName} </li>`
    let newContent = currentContent + newItem
    document.getElementById("girlsRules").innerHTML = newContent
  })
}
