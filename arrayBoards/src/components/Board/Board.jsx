import { useState } from 'react';           
import styles from './Board.module.scss';
import { tasks as initialTasks} from '../../data/tasks';


function Board() {
const [tasks, setTasks] = useState(initialTasks);

  const handleRemoveTask = (idToRemove) => {
    setTasks(tasks.filter((task) => task.id !== idToRemove));
  };

  const handleAddTask = () => {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    
    const createdAt = Date.now();
    // const createdAt = parseInt(document.querySelector("#createdAt").value);

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
        
        {/* <div class="text-[#2b9875] bg-white backdrop-blur-xl p-1 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          ></path>
        </svg>
      </div> */}

       <input
          id="Option1"
          class="size-4 rounded border-gray-300"
          type="checkbox"
        />

            <span className="text-l font-bold">{task.title}</span>{task.description} от {task.createdAt}
              <button onClick={() => handleRemoveTask(task.id)} 
      class="text-gray-600 text-gray-600 hover:bg-white/5 p-1 rounded-md transition-colors ease-linear"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        ></path>
      </svg>
    </button>
            {/* <button onClick={() => handleRemoveTask(task.id)} className="m-3 bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 border-b-4 border-red-900 hover:border-black rounded">Удалить</button> */}
          
          </li>
        ))} 
      </ul>


      
      <div className="mb-8 space-y-4 text-l display-flex justify-between align-middle">
        <hr class="my-6 w-full border-(--pattern-fg)" />



               <h3 className="text-2xl font-bold mb-4">Добавить новую задачу в доску</h3>
      <input type="text" placeholder="Введите название задачи" id="title" 
      class="bg-[#cfcaca] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />

      {/* className="mb-8 w-full border border-gray-300 border-r-8 border-l-8 hover:bg-gray-100" /> <br /> */}
      {/* <input type="text" placeholder="Введите описание" id="description" className="mb-8 w-full border border-gray-300 border-r-8 border-l-8 hover:bg-gray-100" /> */}
       <textarea
      rows="5"
      placeholder="Введите описание"
      id="description"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    ></textarea>
      <br />
      <input type="date" placeholder="Введите дату создания" id="createdAt" className="mb-8 w-auto border border-gray-300 border-r-8 border-l-8 hover:bg-gray-100"/>
      

      <div class="flex flex-row gap-4 items-center p-5">
  <label class="relative flex items-center cursor-pointer">
    <input
      // checked=""
      class="sr-only peer"
      name="futuristic-radio"
      type="radio"
    />
    <div
      class="w-6 h-6 bg-transparent border-2 border-red-500 rounded-full peer-checked:bg-red-500 peer-checked:border-red-500 peer-hover:shadow-lg peer-hover:shadow-red-500/50 peer-checked:shadow-lg peer-checked:shadow-red-500/50 transition duration-300 ease-in-out"
    ></div>
    <span class="ml-2 text-white">Сложная</span>
  </label>
  <label class="relative flex items-center cursor-pointer">
    <input class="sr-only peer" name="futuristic-radio" type="radio" />
    <div
      class="w-6 h-6 bg-transparent border-2 border-yellow-500 rounded-full peer-checked:bg-yellow-500 peer-checked:border-yellow-500 peer-hover:shadow-lg peer-hover:shadow-yellow-500/50 peer-checked:shadow-lg peer-checked:shadow-yellow-500/50 transition duration-300 ease-in-out"
    ></div>
    <span class="ml-2 text-white">Средняя</span>
  </label>
  <label class="relative flex items-center cursor-pointer">
    <input class="sr-only peer" name="futuristic-radio" type="radio" />
    <div
      class="w-6 h-6 bg-transparent border-2 border-green-500 rounded-full peer-checked:bg-green-500 peer-checked:border-green-500 peer-hover:shadow-lg peer-hover:shadow-green-500/50 peer-checked:shadow-lg peer-checked:shadow-green-500/50 transition duration-300 ease-in-out"
    ></div>
    <span class="ml-2 text-white">Легкая</span>
  </label>
</div>

      <br />
      {/* <button onClick={handleAddTask} className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 border-b-4 border-amber-700 hover:border-amber-500 rounded transition-colors duration-300">Добавить задачу</button> */}
       {/* <button onClick={handleAddTask}
  class="mb-6 relative cursor-pointer py-4 px-8 text-center font-barlow inline-flex justify-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden"
>
  <span class="relative z-20">Добавить</span>

  <span
    class="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"
  ></span>

  <span
    class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"
  ></span>
  <span
    class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"
  ></span>
  <span
    class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"
  ></span>
  <span
    class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"
  ></span>
</button> */}
<button onClick={handleAddTask} 
  class="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
>
  <span class="relative z-20">Добавить</span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
  ></span>
  <span
    class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
    ></span
  >
</button>
{/* 
<form class="bg-white w-[90vw] md:w-[50vw] p-6 rounded-lg shadow-md">
  <div class="mb-4">
    <label for="title" class="block text-gray-700 text-sm font-bold mb-2">
      Название задачи
    </label>
    <input
      placeholder="Enter title"
      type="text"
      id="title" 
      class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div class="mb-4">
    <label for="content" class="block text-gray-700 text-sm font-bold mb-2">
      Описание
    </label>
    <textarea
      rows="5"
      placeholder="Enter your content"
      id="description"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    ></textarea>
  </div>
  <div class="flex items-center justify-between">
    <button onClick={handleAddTask} 
  class="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
>
  <span class="relative z-20">Добавить</span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
  ></span>
  <span
    class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
    ></span>
</button>
    <div class="flex items-center">
      
      <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current text-gray-700 mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            id="SVGRepo_tracerCarrier"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              stroke="#000000"
              d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
            ></path>
          </g>
        </svg>
      </svg>
    
    </div>
  </div>
</form> */}


      </div>


    </div>
  );
}
export default Board;