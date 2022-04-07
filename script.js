const lists = document.querySelector('.list')
const num = document.querySelector('#num')
const addBtn = document.querySelector('#add')
const clearBtn = document.querySelector('#clear')
const input = document.querySelector('input')
const date = new Date().toUTCString().split(' ').slice(0, 4).join(' ')

let savedTasks = localStorage.getItem('tasks')
let val = 0

// Functions
function addTask() {
  if (input.value.length === 0) return
  lists.innerHTML += `
	<li>
	<div class="content">
		<div class="left">
			<h1>${input.value}</h1>
			<p>${date}</p>
		</div>
		<i onclick="del(this)" class="bx bxs-trash"></i>
	</div>
</li>
	`
  localStorage.setItem('tasks', JSON.stringify(input.value))
  // Clear input field
  input.value = ''
  // Add to value
  val = val + 1
  num.textContent = val
}
input.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    lists.innerHTML += `
		<li>
		<div class="content">
			<div class="left">
				<h1>${input.value}</h1>
				<p>${date}</p>
			</div>
			<i onclick="del(this)" class="bx bxs-trash"></i>
		</div>
	</li>
		`
    localStorage.setItem('tasks', JSON.stringify(input.value))
    // Clear input field
    input.value = ''
    // Add to value
    val = val + 1
    num.textContent = val
  }
})
function del(self) {
  self.parentNode.parentNode.remove()
  // Remove from value
  val = val - 1
  num.textContent = val
  localStorage.removeItem('tasks')
}
function clearAll() {
  lists.innerHTML = ''
  localStorage.removeItem('tasks')
  // Clear value
  val = 0
  num.textContent = val
}
addBtn.addEventListener('click', addTask)
clearBtn.addEventListener('click', clearAll)
