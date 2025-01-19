import AddNewTodoBtn from "./AddNewTodoBtn";

export default function MainContent() {
    return (

        <main className="main">

            {/* Section container*/}
            <section className="todo-list-container">
                <h1>Todo List</h1>

                <AddNewTodoBtn />


                <div className="table-wrapper">

                    

                    
                </div>
            </section>
        </main>
    )

}