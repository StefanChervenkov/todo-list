import AddNewTodoBtn from "./AddNewTodoBtn";
import TodoListTable from "./TodoListTable";

export default function MainContent() {
    return (

        <main className="main">

            {/* Section container*/}
            <section className="todo-list-container">
                <h1>Todo List</h1>

                <AddNewTodoBtn />

                <TodoListTable />

            </section>
        </main>
    )

}