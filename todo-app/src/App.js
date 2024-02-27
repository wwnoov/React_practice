import React, { useRef, useState, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function createBulkTodo() {
  const array = [];
  //const newArray = [...array];
  //newArray[0] = { id: 1 };
  for (let index = 0; index < 2500; index++) {
    array.push({ id: index + 1, text: `할일 ${index + 1}`, checked: false });
  }
  return array;
}
const App = () => {
  const [todos, setTodos] = useState(createBulkTodo);
  const nextId = useRef(2501);
  const onInsert = useCallback(
    (text) => {
      const nextTodo = { id: nextId.current, text: text, checked: false };
      setTodos(todos.concat(nextTodo));
      nextId.current = nextId.current + 1;
    },
    [todos]
  );
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
