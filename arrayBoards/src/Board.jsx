import { useState } from 'react';           
import styles from './Board.module.css';
function Board() {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "Учебная доска",
      description: "Доска для заданий и конспектов по React",
      createdAt: "2025-03-15"
    },
    {
      id: 2,
      title: "Купить квартиру родителям",
      description: "двухкомнатную квартиру на 1, 2 этаже",
      createdAt: "2025-03-15",
    },
    {
      id: 3,
      title: "Покрыть крышу 2-го дома на Коктерек 14",
      description: "Подготовить дом к продаже, выяснить цены, найти покупателей либо построить склад, баню, СТО",
      createdAt: "2025-03-15",
    },
    {
      id: 4,
      title: "Купить квартиру для своей семьи",
      description: "Пяти комнатная квартира в новом ЖК в центре Астаны с паркингом ",
      createdAt: "2025-03-15",
    },
    {
      id: 5,
      title: "Купить электромобиль",
      description: "Рассмотреть электромобиль для покупки :Lixiang L9, Hummer EV",
      createdAt: "2025-03-15",
    },
    {
      id: 6,
      title: "Купить ноутбук",
      description: "Мощный и удобный ноутбук с ARM-процессором",
      createdAt: "2025-03-15",
    },
    {
      id: 7,
      title: "Беспроводная колонка для воспитательницы сына в садик",
      description: "Компактная колонка с мощным звуком в дет сад",
      createdAt: "2025-03-15",
    },
  ]);


  const handleRemoveBoard = (idToRemove) => {
    setBoards(boards.filter((board) => board.id !== idToRemove));
  };

  const handleAddBoard = () => {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const createdAt = parseInt(document.querySelector("#createdAt").value);

    const newBoard = {
      id: Date.now(),
      title,
      description,
      createdAt,
    };

    console.log(newBoard);
    setBoards((prevBoards) => [...prevBoards, newBoard]);

    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";
    document.querySelector("#createdAt").value = "";
  };

  return (
    <div className={styles.board}>
     
      <ul>
        {boards.map((board) => (
          <li key={board.id} className="p-4 mb-8 space-y-4 text-l display-grid gap-2 justify-between align-middle border border-gray-300 border-r-8 border-l-8 hover:bg-gray-100 shadow-lg">
            <span className="text-l font-bold">{board.title}</span>. {board.description} от {board.createdAt}
            <button onClick={() => handleRemoveBoard(board.id)} className="m-3 bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 border-b-4 border-red-900 hover:border-black rounded">Удалить</button>
          </li>
        ))} 
      </ul>
      <div className="mb-8 space-y-4 text-l display-flex justify-between align-middle">
               <h3 className="text-2xl font-bold mb-4">Добавить новую задачу в доску</h3>
      <input type="text" placeholder="Введите название задачи" id="title" className="mb-8 w-full border border-gray-300 border-r-8 border-l-8 hover:bg-gray-100" /> <br />
      <input type="text" placeholder="Введите описание" id="description" className="mb-8 w-full border border-gray-300 border-r-8 border-l-8 hover:bg-gray-100" />
      <br />
      <input type="date" placeholder="Введите дату создания" id="createdAt" className="mb-8 w-auto border border-gray-300 border-r-8 border-l-8 hover:bg-gray-100"/>
      <br />
      <button onClick={handleAddBoard} className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 border-b-4 border-amber-700 hover:border-amber-500 rounded">Добавить задачу</button>
    
      </div>

    </div>
  );
}
export default Board;