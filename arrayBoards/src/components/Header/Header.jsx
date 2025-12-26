import styles from "./Header.module.scss";


function Header() {
  return (
    // <header style={{
    //   padding: '16px',
    //   backgroundColor: '#02153aff',
    //   color: 'white'
    // }}>
      <header className={styles.header}>
      {/* <h1 className="text-6xl font-bold mb-4">TaskNest</h1> */}
      <h1 className="text-2xl md:text-3xl text-center font-bold">Мой центр управления задачами!</h1>
    </header>
  );
}

export default Header;