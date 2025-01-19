import { useEffect } from "react";
import TodoListItem from "./TodListItem";

export default function TodoListTable() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/jsonstore/todos")
            .then((response) => response.json())
            .then((data) => {
                setTodos(data);
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
                <TodoListItem/>


                </tbody>
            </table>
        </div>
    );
}
