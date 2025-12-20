import { useState } from "react";

import Board from "./Board";

function MainDashboard() {
  
  return (
    <main style={{ padding: '16px' }}>
      <h2 className="text-2xl font-bold mb-4">Главная панель</h2>
      <p className="text-lg">Здесь в будущем будет список задач, статистика и другие виджеты.</p>

      {/* <div style={{
        
        marginTop: '16px',
        padding: '16px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        color: '#333',
        backgroundColor: '#ffffff'
      }}> */}

      <div className="bg-sky-200 mt-2 p-2 border rounded-md text-black" >


        <h3 className="text-2xl font-bold ">Мои текущие задачи:</h3>
        <p className="text-lg p-3">Подгрузка задач из массива</p>
        <div >
            <Board/>
            {/* <div className="class-container">
                {boards.map((board) => (
                <Board 
                key={board.id} 
                board={board}
                />            

                ))}
             </div> */}
        </div>
    

      </div>
    </main>
  );
}

export default MainDashboard;