import { useEffect, useState } from "react";
import TodoListItem from "./TodListItem";

export default function TodoListTable() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/jsonstore/todos")
            .then((response) => response.json())
            .then((data) => {
                
                
                setTodos(Object.values(data));
            });
    }, []);
    
    return (
        <div className="table-wrapper">





            <table className="table">
                <thead>
                    <tr>
                        <th className="table-header-task">Task</th>
                        <th className="table-header-status">Status</th>
                        <th className="table-header-action">Action</th>
                    </tr>
                </thead>
                <tbody>
                {todos.map((todo) => (
                    <TodoListItem key={todo._id} todoText={todo.text} isCompleted={todo.isCompleted} />
                ))}


                </tbody>
            </table>
        </div>
    );
}
