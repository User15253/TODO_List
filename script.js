const tasks = [
    {task: 'go work'},
    {task: 'wefwefwefw'},
    {task: 'wefwefwefwe'},
    {task: 'wefwef we wefwef wef'},
    {task: 'lrgergerge'},
]


const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")


function addTask (){
  if (inputBox.value === '') {
    alert("Напишите что-нб плз")
  }
  else {
    let li = document.createElement("li")
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    // let span = document.createElement("span");
    // span.innerHTML = "\u00d7";
    // li.appendChild(span);

    let btn = document.createElement("button")
    btn.innerText = "Удалить элемент"
    btn.addEventListener('click', () => {
      listContainer.removeChild(li)
      saveData()
  })
    li.appendChild(btn)
    saveData()
  }
  inputBox.value = "";
}


listContainer.addEventListener("click",function(e){
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked")
    saveData()
  }

  // else if (e.target.tagName === "SPAN"){
  //   e.target.parentElement.remove();
  //   saveData()
  // }
}, false);


function saveData(){
  localStorage.setItem("data", listContainer.innerHTML)
}


function showTask(){
  listContainer.innerHTML = localStorage.getItem("data")
}

showTask();

// let str = document.getElementsByClassName("style-scope ytd-rich-grid-media")[0].innerText
// str
// let b = str.slice(0,str.indexOf("\n"))
// b
// let str ='Что такое DOM? На примере реальной задачи JS!\nКак стать программистом\n8,24 тыс. подписчиков\nПодписаться\n882\nПоделиться\n21 тыс. просмотров  4 года назад\nХочешь научиться работать с DOM (Document Object Model)?\n\nТогда смотри видео до конца! …\n...ещё'



// let str = document.getElementsByClassName("style-scope ytd-playlist-panel-video-renderer")[0].innerText
// str



// const btnCahnge = document.querySelector(".btnChange")

// newButton.onclick = function showArray() {
//   for (; currentIndex < currentLimit && currentIndex < tasks.length; currentIndex++) {
//     block.innerHTML += tasks[currentIndex].task + "<br />";
//   };
//    currentLimit++;
// }


// console.log('Console is working');
//   function getTodoList(alltasks) {
//       const ul = document.querySelector('.todo-list-ul'); 

//       const liElements = alltasks.map((element) => {

//           const li = document.createElement('li');
//           li.classList.add('list-group-item');
//           li.append(element.task);
//           console.log('ul= ', ul);
//           return li
//       })
//       return ul.append(...liElements);
//   }

// getTodoList(tasks);


let newButton = document.querySelector('.btnChange');

let block = document.querySelector('.block');

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let currentIndex = 0;
let currentLimit = 1;

// newButton.onclick = function showArray() {
//   for (; currentIndex < currentLimit && currentIndex < tasks.length; currentIndex++) {
//     block.innerHTML += tasks[currentIndex].task + "<br />";
//   };
//    currentLimit++;
// }



newButton.onclick = ((currentPosition = 0) => () => {
  if (currentPosition < arr.length) {
    block.innerHTML += arr[currentPosition++] + "<br />"
  };
});

