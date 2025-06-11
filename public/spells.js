async function castSpell() {
  console.log("Loading recipe...")
  const el = document.getElementById("recipe");

  if(!el) throw "Cannot find element with id 'recipe'"

  const ul = document.createElement('ul');

  const response = await fetch("ingredients")

  const { ingredients } = await response.json()

  ingredients.forEach(ingredient => {
    li = document.createElement('li')
    text = document.createTextNode(ingredient)
    li.appendChild(text)
    ul.appendChild(li)
  });
  
  el.insertAdjacentElement('afterend', ul)
  console.log("Recipe loaded!")
}

function reveal() {
  alert("bubbleBubble(...ingredients)")
}

function bubbleBubble(...ingredients) {
  fetch(`bubble-bubble?${ingredients.join('&').replace(',', '&')}`)
  return "Check your Network tab"
}