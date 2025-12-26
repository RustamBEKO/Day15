
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
      <div class="relative group inline-block">
  <div
    class="text-gray-900 py-2 rounded-md hover:cursor-pointer flex justify-center items-center gap-4 px-4 text-gray-300 hover:bg-[#02153A] hover:text-white transition duration-150 ease-in-out"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 14"
      height="25"
      width="25"
    >
      <path
        fill="#FFA000"
        d="M16.2 1.75H8.1L6.3 0H1.8C0.81 0 0 0.7875 0 1.75V12.25C0 13.2125 0.81 14 1.8 14H15.165L18 9.1875V3.5C18 2.5375 17.19 1.75 16.2 1.75Z"
      ></path>
      <path
        fill="#FFCA28"
        d="M16.2 2H1.8C0.81 2 0 2.77143 0 3.71429V12.2857C0 13.2286 0.81 14 1.8 14H16.2C17.19 14 18 13.2286 18 12.2857V3.71429C18 2.77143 17.19 2 16.2 2Z"
      ></path>
    </svg>
    <p>Структура проекта</p>
  </div>

  <div
    class="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
  >
    <ul class="p-4 space-y-1">
      <li class="py-1">📁 src</li>
      <li class="pl-4 py-1">📁 data</li>
      <li class="pl-8 py-1">📄 tasks.js</li>
      <li class="pl-4 py-1">📁 components</li>
      <li class="pl-8 py-1">📁 Header</li>
      <li class="pl-12 py-1">📄 Header.jsx</li>
      <li class="pl-12 py-1">📄 Header.module.scss</li>
      <li class="pl-8 py-1">📄 Sidebar.jsx</li>
      <li class="pl-8 py-1">📄 Board.jsx</li>
      <li class="pl-4 py-1">📁 styles</li>
      <li class="pl-8 py-1">📄 globals.scss</li>
      <li class="pl-8 py-1">📄 _variables.scss</li>
      <li class="pl-8 py-1">📄 _mixins.scss</li>
    </ul>
  </div>
</div>
    </nav>
    
    </div>

    

    


  );
}

export default Sidebar;