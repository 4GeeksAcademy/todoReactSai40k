import React, { useState } from "react";
const TodoList = () => {
    
    const [task, setTask] = useState("");
    const [todoList, setTodoList] = useState([]);

    function addTask (e){
        if (e.key === "Enter") {
            setTodoList(todoList.concat(task));
            setTask("");
              
        }
        
    }
    function deleteTask (index) {
        const updatedTodoList= todoList.filter((_,i) =>i !==index);
            setTodoList (updatedTodoList);
    }
    return (
        <>
            <div className="container text-center">
                <input className="w-100" value={task} type="text" onKeyDown={addTask} onChange={(e) => setTask(e.target.value)} />
                    <ul className="my-1 text-start">
                        {todoList.map((item, index) => 
                        <li className="p-2" key={index}>
                        {item} 
                            <a className="p-auto ml-auto text-dark" style={{float:"right"}} onClick={(e) => deleteTask(index)}>
                                x
                            </a>
                        </li>)}
                    </ul>
            </div>
            
            
        </>
    );
};
export default TodoList;