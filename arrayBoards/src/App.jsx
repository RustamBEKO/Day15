import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainDashboard from './MainDashboard';

function App() {

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        
           <MainDashboard />
           
                
      </div>
    </div>
  );
}

export default App;