import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ title: "", task: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), ...todo }]);
    setTodo({ title: "", task: "" });
  };
  const handleDelTodo = (id) => {
    const newTodod = todos.filter((todo) => todo.id != id);
    setTodos(newTodod);
  };
  return (
    <>
      <h2 className="bg-black text-white font-bold text-center  p-5  text-5xl">
        My Todo List
      </h2>

      <form action="" className="text-center" onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2 rounded-md"
          placeholder="Enter Title.."
          value={todo.title}
          onChange={(e) => {
            setTodo({ ...todo, title: e.target.value });
          }}
          required
        />
        <input
          type="text"
          name="task"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2 rounded-md"
          placeholder="Enter your task.."
          value={todo.task}
          onChange={(e) => {
            setTodo({ ...todo, task: e.target.value });
          }}
          required
        />
        <button
          className="bg-black text-white p-3 font-bold  rounded-md"
          type="submit"
        >
          Add Todo
        </button>
      </form>
      <div className="bg-slate-400 p-3 text-center text-2xl mx-16">
        {todos.length == 0 ? (
          <h4>No Todo Added Yet..</h4>
        ) : (
          <div className="text-center ">
            {todos.map((todo, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-evenly bg-slate-400 p-3 text-2xl"
                >
                  <h4 className="font-bold from-neutral-500 text-2xl">
                    {todo.title.toUpperCase()}
                  </h4>
                  <p>{todo.task}</p>
                  <button
                    className="text-red-500 bg-red-300 p-1 rounded-md px-4"
                    onClick={(e) => {
                      handleDelTodo(todo.id);
                    }}
                  >
                    Del
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
