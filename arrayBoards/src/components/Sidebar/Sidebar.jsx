
import React from "react";
import styles from "./Sidebar.module.scss";
function Sidebar() {
  return (
    // <div className="w-64 bg-gray-800 text-white flex flex-col">
    <div className={styles.sidebar}>
    <div className="flex flex-col items-center">
      <img src="img/logoApp.svg" class={styles.logo} alt="LogoApp"></img>
      </div>

    <nav className={styles.navigationBar}>
      
     {/* <a href="#" className="flex items-center p-2 rounded-md text-gray-100 hover:bg-gray-700 hover:text-white transition duration-150 ease-in-out"> */}
     <a href="#" className={styles.linkActive}>

        Личные задачи
      </a>
      <a href="#" className={styles.link}>
     {/* <a href="#" className="flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-150 ease-in-out"> */}
     
        Рабочие задачи
      </a>
      <a href="#" className={styles.link}>
       {/* <a href="#" className="flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-150 ease-in-out"> */}
        Завершенные
      </a>
      <a href="#" className={styles.link}>
       {/* <a href="#" className="flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-150 ease-in-out"> */}

        Настройки
      </a>
      
    </nav>
    </div>

    

    


  );
}

export default Sidebar;