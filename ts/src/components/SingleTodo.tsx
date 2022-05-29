import React, { useState } from "react"
import { Todo } from "../Model"

interface Props {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  //--- STATES
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

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

  return (
    <form className="todos__single">
      {edit ? (
        <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
      ) : todo.isDone ? (
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
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit)
            }
          }}
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
