// let clickCount = 0
// function incrClickCount(){
//
//     clickCount+=1
//     let countLabel = document.getElementById('label-count');
//     countLabel.innerHTML =clickCount;
// }
//
// function resetClickCount(){
//     clickCount = 0;
//     let countLabel = document.getElementById('label-count');
//     countLabel.innerHTML =clickCount;
// }

// clickBtn = document.getElementById("btn-click-here")
// clickBtn.addEventListener("click",function(){
//       clickCount+=1
//       let countLabel = document.getElementById('label-count');
//       countLabel.innerHTML =clickCount;
// })
//
// clickBtn.addEventListener("mouseover",function(){
//   console.log("on hover")
//   clickBtn.setAttribute("style","font-size:25px;background-color:#9B59B6");
// })
//
// clickBtn.addEventListener("mouseout",function(){
//   console.log("on hover")
//   clickBtn.setAttribute("style","font-size:20px");
// })
//
// resetBtn = document.getElementById("btn-reset")
// resetBtn.addEventListener("click",function(){
//       clickCount = 0;
//       let countLabel = document.getElementById('label-count');
//       countLabel.innerHTML =clickCount;
// })
//
// usernameInput = document.getElementById("txt-usernm")
// passwordInput = document.getElementById("txt-password")
// submitBtn = document.getElementById("btn-submit")
// form1 = document.getElementById("user-form")
// form1.addEventListener("submit",function(){
//     // console.log("getting here");
//     alert(usernameInput.value);
//     alert(passwordInput.value);
//
// })


// taskValue = document.getElementById('task-text')
// alert(taskValue.value)
// let newTask = document.createElement("li");
// newTask.textContent = "Test";
// console.log(newTask);
// // document.body.appendChild(newTask)
// // console.log(document.body)
// taskList = document.getElementById("list1");
// // console.log(taskList);
// taskList.appendChild(newTask);

addBtn = document.getElementById("add-id")

addBtn.addEventListener("click",function(){
  taskValue = document.getElementById('task-text')

  let newTask = document.createElement("li")
  newTask.textContent = taskValue.value
  taskList = document.getElementById("list1")
  console.log(taskList)
  taskList.appendChild(newTask)
})

// var p = document.createElement("p");
// document.body.appendChild(p);
// console.log(document.body);
