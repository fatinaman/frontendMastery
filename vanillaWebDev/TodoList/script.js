let activeTasks = []
const completedTasks = []

const input = document.querySelector("#taskInput")
const addBtn = document.querySelector("#addButton")
const taskContainer = document.querySelector("#taskContainer")

let mode = "active"


const showActiveBtn = document.querySelector("#showActive")
const showAllBtn = document.querySelector("#showAll")
const showCompletedBtn = document.querySelector("#showCompleted")

showActiveBtn.addEventListener('click', ()=>{
    mode = "active"
    renderList(mode)
})

showAllBtn.addEventListener('click', ()=>{
    mode = "all"
    renderList(mode)
})

showCompletedBtn.addEventListener('click', ()=>{
    mode = "completed"
    renderList(mode)
})

const renderList = (mode) => {
    taskContainer.innerHTML = ""
    if (mode == "active" || mode =="all"){
        activeTasks.forEach((task)=>{
            taskContainer.innerHTML += `<li><span class="task-text">${task}</span><span class="active">active</span><button class="deleteBtn">X</button></li>`
        })
    }
    if (mode == "completed" || mode =="all"){
        completedTasks.forEach((task)=>{
            taskContainer.innerHTML += `<li><span class="task-text">${task}</span><span class="finished">finished</span></li>`
        })
    }
}

addBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    taskToBeAdded = input.value.trim()
    if(taskToBeAdded){
        activeTasks.push(taskToBeAdded)
        input.value = ""
        renderList(mode)
    }
})

taskContainer.addEventListener("click", (e)=>{
    if(e.target.classList.contains("deleteBtn")){
        const tasktoRemove = e.target.closest("li")
        const taskText = tasktoRemove.querySelector(".task-text").textContent
        completedTasks.push(taskText)
        activeTasks = activeTasks.filter(task => task != taskText)
        renderList("completed")
    }
})