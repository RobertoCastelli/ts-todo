import React from "react"
import { Todo } from "../Model"

interface Props {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  //--- DONE TODO
  const handleDone = (index: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === index ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
  }

  //--- DELETE TODO
  const handleDelete = (index: number) => {
    setTodos(todos.filter((todo) => todo.id !== index))
  }

  //--- MODIFY TODO
  const handleModify = (index: number) => {}

  return (
    <form className="todos__single">
      {todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <div className="todos__single--text">{todo.todo}</div>
      )}
      <div className="todos__single--icons">
        <span
          className="todos__single--icon"
          onClick={() => handleDone(todo.id)}
        >
          OK
        </span>
        <span
          className="todos__single--icon"
          onClick={() => handleModify(todo.id)}
        >
          MOD
        </span>
        <span
          className="todos__single--icon"
          onClick={() => handleDelete(todo.id)}
        >
          DEL
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
