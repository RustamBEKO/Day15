function Header() {
  return (
    <header style={{
      padding: '16px',
      backgroundColor: '#02153aff',
      color: 'white'
    }}>
      <h1 className="text-6xl font-bold mb-4">TaskNest</h1>
      <p className="text-2xl font-bold ">Мой центр управления задачами!</p>
    </header>
  );
}

export default Header;