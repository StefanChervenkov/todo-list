import { useEffect, useState } from "react";
import TodoListItem from "./TodListItem";
import LoadingSpinner from "./LoadingSpinner";

export default function TodoListTable() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3030/jsonstore/todos")
            .then((response) => response.json())
            .then((data) => {
                
                setIsLoading(false);
                setTodos(Object.values(data));
            });
    }, []);
    
    return (
        <div className="table-wrapper">

            {isLoading && <LoadingSpinner />}



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
