import React from "react";
import { useState } from "react";
import Board from "../Board/Board";
import styles from "./MainDashboard.module.scss";

const MainDashboard = () => {
  return (
    <main className={styles.mainDashboard}>
      <h3 className="text-2xl font-bold ">Главная панель</h3>
      <p className="text-l p-3">
        Здесь в будущем будет список задач, статистика и другие виджеты.
      </p>

      {/* <div className="bg-sky-200 mt-2 p-2 border-0 rounded-md text-black"> */}
      <div className={styles.taskBoard}>
        <h3 className="text-2xl font-bold ">Личные задачи:</h3>
        <p className="p-3 text-l">Подгрузка задач из файла</p>
        <div>
          <Board />
        </div>
      </div>
    </main>
  );
};

export default MainDashboard;
