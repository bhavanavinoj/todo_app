import axios from "axios";
import React, { useEffect, useState } from "react";

const Api = () => {

  const [data, setData] = useState([]);
  const [task, setTask] = useState("");

  const getTodos = () => {
    axios
      .get("http://localhost:3000/todo/getTodos")
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  const addTodo = () => {
    axios
      .post("http://localhost:3000/todo/addTodo", {
        task: task
      })
      .then(() => {
        setTask("");
        getTodos();   
      });
  };

  const deleteTodo = (id) => {
    axios
      .delete("http://localhost:3000/todo/deleteTodo", {
        data: { id: id }
      })
      .then(() => {
        getTodos();   
      });
  };

  return (
    <center>
    <div style={{ padding: "20px" }}>
      <center>
      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "100%", textAlign: "center", marginTop:"20px" }}>

        <thead>
          <tr>
            <th>Task</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>

          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.task}</td>
              <td>
                <button onClick={() => deleteTodo(item._id)}>Delete</button>
              </td>
            </tr>
          ))}

        </tbody>

      </table>
      </center>
    </div>
    </center>
  );
};

export default Api;