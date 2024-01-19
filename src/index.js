document.addEventListener("DOMContentLoaded", () => {
    let form= document.querySelector('#create-task-form')
    document.getElementById('create-task-form').addEventListener('submit', (e) => {
    e.preventDefault()
    taskList(e.target.elements['new-task-description'].value)
    form.reset()
  })
});
function taskList(tasks) {
  let ol = document.getElementById('tasks')
  let li = document.createElement('li')
  let btn = document.createElement('button')

  btn.textContent = 'x';
  li.textContent = `${tasks} `
  li.appendChild(btn)
  ol.appendChild(li)

  btn.addEventListener('click', () => {
    ol.removeChild(li);
  })
}
