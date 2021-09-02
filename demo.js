// 
function deleteTask(){
//delete list
let delTask=document.getElementsByClassName('btn-del');
for(let i=0;i<delTask.length;i++){
    let task=delTask[i];
    task.addEventListener('click',() => {
    task.parentNode.remove()
    })
}
}
deleteTask();

//add task
let listInput=document.getElementById('list-input');

let addBtn=document.getElementsByClassName('btn-add')[0]
addBtn.addEventListener('click',()=>{
   if(listInput.value === ''){
      window.alert('please input task')
   }else{
      
    let taskDetail=document.createElement('li');
    let text=listInput.value;
    taskDetail.innerHTML=`<span class="task-detail col">${text}</span> <button class="btn btn-comp col">complete</button><button class="btn btn-del col">delete</button>`
    taskDetail.classList.add('list-item')

    let shoppingList=document.getElementsByClassName('shopping-list')[0]
shoppingList.appendChild(taskDetail);
listInput.value =''
deleteTask();
completeTask();
   }
})


// complete  task
function completeTask(){
    let completeTask=document.getElementsByClassName('btn-comp');
    for(let i=0;i<completeTask.length;i++){
        let task=completeTask[i];
        task.addEventListener('click',() => {
        task.previousElementSibling.classList.add('line-through')
        })
    }
    }

    completeTask();