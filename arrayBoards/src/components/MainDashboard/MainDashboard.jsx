import { useState } from "react";
import Board from "../Board/Board";

const MainDashboard = () => {
  return (
    <main style={{ padding: "16px" }}>
      <h2 className="text-2xl font-bold mb-4">Главная панель</h2>
      <p className="text-lg">
        Здесь в будущем будет список задач, статистика и другие виджеты.
      </p>

      <div className="bg-sky-200 mt-2 p-2 border rounded-md text-black">
        <h3 className="text-2xl font-bold ">Личные задачи:</h3>
        <p className="text-lg p-3">Подгрузка задач из файла</p>
        <div>
          <Board />
        </div>
      </div>
    </main>
  );
};

export default MainDashboard;
