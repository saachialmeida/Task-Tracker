import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'

const App=() =>{
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks,settasks] = useState([
    {
        id:1,
        text:'Doctors Appointment',
        day: 'FEB 5th at 2:30 pm',
        reminder: true,

    },
    {
        id:2,
        text:'Meeting at School',
        day: 'FEB 5th at 2:30 pm',
        reminder: true,

    },
    {
        id:3,
        text:'Food Shopping',
        day: 'FEB 5th at 2:30 pm',
        reminder: false,

    }
])
const addTask=(task)=>{
  const id= Math.floor(Math.random() * 10000 )+ 1
  const newTask = { id,...task}
  settasks([...tasks, newTask ])
}
const deleteTask=(id)=>{
  settasks(tasks.filter((task) => task.id !==id) )
}
const toggleReminder=(id )=> {
  settasks(tasks.map((task) =>
  task.id === id ? {...task, reminder:!task.reminder} : task)
  )
}
  return (
    <div className='container'>
     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
     <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    
    </div>
  );
}

export default App;
