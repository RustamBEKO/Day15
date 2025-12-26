
import React from "react";
import styles from "./Sidebar.module.scss";
function Sidebar() {
  return (
    // <div className="w-64 bg-gray-800 text-white flex flex-col">
    <div className={styles.sidebar}>
    <div className="p-4 text-2xl font-bold border-b border-gray-700">
      <img src="img/logo-dark.svg" class="h-8 w-auto" alt="Logo Play"></img>
     
      </div>

    <nav className="flex-1 px-2 py-4 space-y-2">
      
     {/* <a href="#" className="flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-150 ease-in-out"> */}
     <a href="#" className={styles.link}>

        Личные задачи
      </a>
     <a href="#" className="flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-150 ease-in-out">
     
        Рабочие задачи
      </a>
       <a href="#" className="flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-150 ease-in-out">
        Завершенные
      </a>
       <a href="#" className="flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-150 ease-in-out">

        Настройки
      </a>
      
    </nav>
    </div>

    

    


  );
}

export default Sidebar;