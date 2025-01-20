export default function TodoListItem({todoText, isCompleted}) {

    return (<tr className={`todo ${isCompleted ? "is-completed" : ""}`}>
        <td>{todoText}</td>
        <td>{isCompleted ? "Complete" : "Incomplete"}</td>
        <td className="todo-action">
            <button className="btn todo-btn">Change status</button>
        </td>
    </tr>
    );
}