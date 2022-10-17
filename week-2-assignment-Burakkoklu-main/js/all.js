const todosUrl ="https://jsonplaceholder.typicode.com/todos"
const root =document.querySelector("#root");


const errorLogger =(error)=>{
    console.log({error});
}

const renderTodos=()=>{
    //todosları api'den al
    //todoları listele
    const ul=document.createElement("ul");
    const renderItem=(item)=>{
        const li = document.createElement("li");
        li.innerText=`${item.id} ${item.title} ${item.userID}`;
        ul.appendChild(li);
    }
    fetch(todosUrl).then(resp=>resp.json()).then((todos=[])=>{
        todos.forEach(item => {
            renderItem(item);
        });
        root.appendChild(ul);
    }).catch(error=>{
        errorLogger(error);
    })
}
renderTodos();