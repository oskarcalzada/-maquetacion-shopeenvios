import { useEffect, useState } from 'react';
import AppRoutes from './AppRoutes'
import Menu from './Menu'
import TopMenu from './components/Account/TopMenu';


function App() {
  return (
    <div id="structure">
      <Menu />
      <div id="main_container">
        <div id="top_bar">
          <TopMenu />
        </div>
        <main>
          <AppRoutes />
        </main>
      </div>
    </div>
  )
}

export default App
