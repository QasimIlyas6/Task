import React from 'react';
import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'User 1',
        date: 'Logged in at: Today 04:00 Pm',
        reminder: true
    },
    {
        id: 2,
        text: 'User 2',
        date: 'Logged in at: Today 09:00 Pm',
        reminder: false
    },
    {
        id: 3,
        text: 'User 3',
        date: 'Logged in at: Today 06:00 Pm',
        reminder: false
    }
])
//Add Task

const addTask = (task) => {
  const id = Math.floor(Math.random()* 10000) + 1;
  const newTask = {id, ...task}
  setTasks([...tasks, newTask]);
  console.log(...tasks,newTask);

  
}

// Delete Task
 const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
 }

 // Toggle Reminder

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => 
  task.id === id ? {...task, reminder: !task.reminder} : task ))
}
  return (
    <div className="container">
      <Header  title= 'Login' onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? 
      (<Tasks tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleReminder}/>
      ) : (
        'No Task To Show'
      ) }
      
    </div>
  );
}


export default App;
