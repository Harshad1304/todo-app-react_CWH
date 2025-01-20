import { useRef, useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      todo: "Hello World",
      isCompleted: false,
      todoId: Date.now(),
    },
  ]);

  // console.log(todos);
  
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // updating and editing todo
  const [editTodo,setEditTodo] = useState("");
  const [editTodoId,setEditTodoId] = useState(null);
  const inputRef = useRef();
  console.log(editTodoId)

 
  
  const handleEdit = (id,currentTodo) => {
    setTodo(currentTodo);
    setEditTodoId(id);
    inputRef.current.focus()
   
  };

  const handleUpdateTodo = (e)=>{
    e.preventDefault();
    setTodos(prev=>prev.map((todos)=>todos.todoId === editTodoId?{...todos,todo:todo,isCompleted:false}:todos));
    setEditTodo("");
    setEditTodoId(null);
    setTodo("")

  }
  
  const handleDelete = (id) => {
    setTodos(prev=>prev.filter((todos)=>todos.todoId !== id));
  };

  const handleAdd = (e) => {
    e.preventDefault()
    if (!todo.trim()) return;
    setTodos([
      ...todos,
      {
        todo,
        isCompleted: false,
        todoId: Date.now(),
      },
    ]);
    setTodo("");
  };
  const handleCompleted = (id)=>{
    setTodos(prev=>prev.map(todos=> todos.todoId === id?{...todos,isCompleted:!todos.isCompleted}:todos))
  }

  const cancleUpdate = (e)=>{
    e.preventDefault()
    setEditTodo("");
    setEditTodoId("");
    setTodo("")
  }
  return (
    <div className="h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800 flex justify-center items-center">
      {/* <Navbar /> */}
      {/* todo container  */}
      <div className="w-full my-5 rounded-3xl min-h-[80vh] p-10 text-white bg-slate-900 mx-auto container">
        <h1 className="text-xl font-bold mb-10 ">Add Todos</h1>
        {/* todo input -add todo */}
        <form className="flex gap-3 w-[60%] mx-auto">
          <input
          ref={inputRef}
            onChange={(e) => handleChange(e)}
            value={todo}
            type="text"
            placeholder="Add a new task"
            className="text-black flex-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <button 
          type="submit"
            onClick={editTodoId?(e)=>handleUpdateTodo(e):(e)=>handleAdd(e)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
           {editTodoId ? "Update" : "Add"}
          </button>
          {editTodoId && (<button 
          
            onClick={(e)=>cancleUpdate(e)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
           Cancel
          </button>)}
        </form>

        {/* todos-display */}

        <div className="w-[60%] p-4 rounded-lg mx-auto mt-5 text-xl font-semibold bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
          <p>Your Todos</p>
        </div>

        {/* todos display */}
        {todos?.map((item, index) => (
          <div
            key={index}
            className="mt-3 h-20 flex justify-between items-center p-10 w-[60%] mx-auto bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-1">
              <input
              onChange={()=>handleCompleted(item.todoId)}
              checked={item.isCompleted}
                type="checkbox"
                id={item.todoId}
                className="w-6 h-4 bg-transparent border-2 border-blue-500 rounded-lg cursor-pointer checked:bg-blue-500 checked:border-blue-500 transition"
              />

              <label htmlFor={item.todoId}
                className={`text-white cursor-pointer text-lg font-semibold ${
                  item?.isCompleted ? "line-through" : ""
                }`}
              >
              {item.todo}
              </label>
            </div>
            <div className=" flex gap-3">
              {/* {item.todoId === editTodoId?(<button
                onClick={()=>handleUpdate(item.todoId)}
                className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition shadow-md"
              >
               Update
              </button>):(<button
                onClick={()=>handleEdit(item.todoId,item.todo )}
                className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition shadow-md"
              >
                Edit
              </button>)} */}
              <button
                disabled={item.todoId===editTodoId}
                onClick={()=>handleEdit(item.todoId,item.todo )}
                className={`px-4 py-2 text-white rounded-lg ${item.todoId===editTodoId?"bg-violet-400 ":"bg-violet-500 hover:bg-violet-700"} transition shadow-md`}
              >
                Edit
              </button>
              <button
                disabled={item.todoId===editTodoId}
                onClick={() => handleDelete(item.todoId)}
                className={`px-4 py-2 text-white rounded-lg ${item.todoId===editTodoId?"bg-red-400 ":"bg-red-500 hover:bg-red-700"} transition shadow-md`}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
