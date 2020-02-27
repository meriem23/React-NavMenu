import React from 'react';
import NavBar from './components/Navbar'
import './App.css';

const menuItems = [{title : 'Home', link : 'https://www.google.com'},
{title : 'Service', link : '',subMenu : ['For Ent', 'For Stu', 'For Hobb']},
{title : 'Contact', link : ''}]
function App() {
  return (
    <div className="App">
<NavBar data={menuItems}/>
    </div>
  );
}

export default App;
