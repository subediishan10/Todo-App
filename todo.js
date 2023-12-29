let todoList = [
    {
        name:'Ishan Subedi',
        dueDate:'4/10/2023'
    },
    {
        name:'Laxmi Subedi',
        dueDate:'4/10/2023'
    }  
];

displayItems();


function addTodo() {
    
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');

    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    if(todoItem===''||todoDate===''){
        inputElement.value='';
        dateElement.value='';
    }else{
        todoList.push({name: todoItem,dueDate: todoDate});
        inputElement.value='';
    
        displayItems();
    }

   
    
}
function displayItems(){
    let containerElement=document.querySelector
    ('.todo-container');
    let newHtml='';

    for(let i=0;i<todoList.length;i++){
       let{name,dueDate}=todoList[i];
        newHtml+=`
        
        <span>${name}</span>
        <span>${dueDate}</span>
        <button class="btn-delete"onclick="todoList.splice(${i},1);
        displayItems();">Delete</button>
    
        `;
      
    }
    containerElement.innerHTML=newHtml;
}