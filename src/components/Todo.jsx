import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "../redux/features/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todos.list);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    // dispatch action to add todo
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };
  return (
    <div className="">
      <div>
        <h2 className="text-4xl font-semibold text-center">Todo List App</h2>
        <div className="flex my-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border border-gray-600 px-4 p-1  rounded-md text-start focus:outline-none"
            type="text"
            placeholder="Enter todo"
          />
          <button
            onClick={handleAddTodo}
            className="bg-green-600 text-white px-4 rounded-md ml-1 cursor-pointer "
          >
            Add
          </button>
        </div>
        <ul className="flex text-center  flex-col gap-2">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <li
                key={todo.id}
                className="text-center justify-between p-2 space-x-4 border-b border-gray-400 max-w-md mx-auto"
              >
                <span
                  onClick={() => dispatch(toggleTodo(todo.id))}
                  className={`cursor-pointer hover:border-b border-gray-500 ${
                    todo.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-red-500 hover:border-b border-gray-500 cursor-pointer"
                >
                  Remove
                </button>
              </li>
            ))
          ) : (
            <li>No Task Found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
