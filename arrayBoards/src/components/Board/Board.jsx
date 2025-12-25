import { useState } from 'react';           
import styles from './Board.module.css';
import { tasks as initialTasks} from '../../data/tasks';


function Board() {
const [tasks, setTasks] = useState(initialTasks);

  const handleRemoveTask = (idToRemove) => {
    setTasks(tasks.filter((task) => task.id !== idToRemove));
  };

  const handleAddTask = () => {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    
    const createdAt = parseInt(document.querySelector("#createdAt").value);

    const newTask = {
      id: Date.now(),
      title,
      description,
      createdAt,
    };

    console.log(newTask);
    setTasks((prevTasks) => [...prevTasks, newTask]);

    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";
    document.querySelector("#createdAt").value = "";
  };

  return (
    <div className={styles.task}>
     
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li key={task.id} className="bg-white grid grid-cols-[0.15fr_1fr_3fr_0.5fr] gap-auto p-4 text-l  gap-2 justify-between border border-gray-300 border-r-8 border-l-8 hover:bg-gray-100 shadow-lg">
            <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" stroke-linecap="square">
              
              <circle cx="11" cy="11" r="11" class="fill-sky-400" />
              <circle cx="11" cy="11" r="10.5" class="stroke-sky-400" />
              <path d="M8 11.5L10.5 14L14 8" class="stroke-sky-900 dark:stroke-sky-100" />
              
            </svg>
            <span className="text-l font-bold">{task.title}</span>{task.description} от {task.createdAt}
            <button onClick={() => handleRemoveTask(task.id)} className="m-3 bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 border-b-4 border-red-900 hover:border-black rounded">Удалить</button>
          </li>
        ))} 
      </ul>
      <div className="mb-8 space-y-4 text-l display-flex justify-between align-middle">
        <hr class="my-6 w-full border-(--pattern-fg)" />
               <h3 className="text-2xl font-bold mb-4">Добавить новую задачу в доску</h3>
      <input type="text" placeholder="Введите название задачи" id="title" className="mb-8 w-full border border-gray-300 border-r-8 border-l-8 hover:bg-gray-100" /> <br />
      <input type="text" placeholder="Введите описание" id="description" className="mb-8 w-full border border-gray-300 border-r-8 border-l-8 hover:bg-gray-100" />
      <br />
      <input type="date" placeholder="Введите дату создания" id="createdAt" className="mb-8 w-auto border border-gray-300 border-r-8 border-l-8 hover:bg-gray-100"/>
      <br />
      <button onClick={handleAddTask} className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 border-b-4 border-amber-700 hover:border-amber-500 rounded transition-colors duration-300">Добавить задачу</button>
    
      </div>

    </div>
  );
}
export default Board;