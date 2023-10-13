import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ name: '', description: '' });

  const addTask = () => {
    if (task.name.trim() === '') return; // Input validation
    setTasks([...tasks, task]);
    setTask({ name: '', description: '' });
  };

  const editTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Task Management App</h1>
      <div style={styles.formContainer}>
        <h2>Add Task</h2>
        <form>
          <input
            type="text"
            placeholder="Task Name"
            value={task.name}
            onChange={(e) => setTask({ ...task, name: e.target.value })}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Task Description"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            style={styles.input}
          />
          <button type="button" onClick={addTask} style={styles.button}>Add Task</button>
        </form>
      </div>
      <div>
        <h2 style={styles.listHeader}>Task List</h2>
        <ul style={styles.taskList}>
          {tasks.map((task, index) => (
            <li key={index} style={styles.listItem}>
              {task.name} - {task.description}
              <button onClick={() => editTask(index, task)} style={styles.editButton}>Edit</button>
              <button onClick={() => deleteTask(index)} style={styles.deleteButton}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  formContainer: {
    background: '#f0f0f0',
    padding: '10px',
    borderRadius: '5px',
  },
  input: {
    width: '100%',
    padding: '5px',
    margin: '5px 0',
  },
  button: {
    background: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
  listHeader: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '20px',
  },
  taskList: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    background: '#f9f9f9',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editButton: {
    background: '#ffc107',
    color: '#333',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
  deleteButton: {
    background: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
};

export default App;
