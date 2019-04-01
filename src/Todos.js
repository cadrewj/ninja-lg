import React from 'react'

const Todos = ({todos,deleteTodo}) => {
    const todoList = todos.length ? ( //if yes
        todos.map((todo,index) => {
            return(
                <div className="collection-item" key={index}>
                    <span onClick={() => {
                        deleteTodo(todo.id)
                        }}> {todo.content}</span>
                </div>
            );
        })

    ) : 
    
    (//else do the folowing
    <p className="center">No Todos Left</p>
    );
    return ( //used to output the todo list
        <div className="todos collection">
            {todoList}
        </div>
    );
}
export default Todos; //export so it can be used later in the app