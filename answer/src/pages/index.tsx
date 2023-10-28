import { TodoInput } from "@/components/TodoInput"
import { TodoList } from "@/components/TodoList"
import { useState } from "react"

export default function Home() {
  const [todos, setTodos] = useState<string[]>([])

  const onInput = (value: string) => {
    setTodos([...todos, value])
  }
  return (
    <>
      <TodoInput onInput={onInput}/>
      <TodoList items={todos}/>
      <div data-testid='todo-count'>
        {todos.length > 0 ? `${todos.length} items left` : 'No items left'}
      </div>
    </>
  )
}
