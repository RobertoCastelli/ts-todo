import React from "react"

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleSubmit: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleSubmit }) => {
  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        type="input"
        className="input__box"
        placeholder="enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="input__submit">
        GO
      </button>
    </form>
  )
}

export default InputField
