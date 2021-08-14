const draggable_list = document.getElementById("draggable-list")
const check = document.getElementById("check")

const richestPeople = [
"Jeff Bezos",
"Elon Musk",
"Bernard Arnault",
"Bill Gates",
"Mark Zuckerberg",
"Warren Buffett",
"Larry Ellison",
"Larry Page",
"Sergey Brin",
"Mukesh Ambani"
]

// Store list items
const listItems = []

let dragStartIndex


// Index list items int o DOM
const createList = () => {
[...richestPeople]
.map(a => ({value: a, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(a => a.value)
.forEach((person, index)=> {
 const listItem = document.createElement("li")

 listItem.setAttribute("data-index", index)

 listItem.innerHTML = `
 <span class="number">${index +1}</span>
 <div class="draggable" draggable="true">
 <p class="person-name">${person}</p>
 <i class="fas fa-grip-lines"></i>
 </div>
 `
 listItems.push(listItem)
 draggable_list.appendChild(listItem)
})
}
createList()
