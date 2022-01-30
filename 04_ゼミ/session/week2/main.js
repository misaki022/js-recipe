const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

addButton.onclick = function () {
  const text = memoInput.value

  const card = document.createElement("div")

  card.className = "card"
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  memoContainer.append(card)
  card.append(todo)
  memoInput.value = ""
  console.log(todo.textContent)
}
