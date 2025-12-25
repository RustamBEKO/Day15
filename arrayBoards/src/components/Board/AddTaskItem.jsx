import { useState } from 'react';
import { tasks as initialTasks} from '../../data/tasks';

function AddTaskItem() {
    const [tasks, setTasks] = useState(initialTasks);

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
    );
}

export default AddTaskItem;