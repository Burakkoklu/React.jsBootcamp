import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import TodoList from "./components/todo-list";
import ReactSwitch from 'react-switch';
import { useThemeContext } from './context/ThemeContext';
import { useState } from 'react';

function App() {
  const {contextTheme, setContextTheme} = useThemeContext()
  const [checked, setChecked] = useState(false);

  const handleSwitch = (nextChecked) => {       
    setContextTheme((state) => (state === 'Light' ? 'Dark':'Light'))       
    setChecked(nextChecked);
    //console.log(nextChecked)
  }
   
  return (
    <div className="App">      
      <header className="App-header" id={contextTheme} > 
      <ReactSwitch 
          onChange={handleSwitch}
          checked={checked}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
          id="material-switch"
        /> 
               
               <Header />
      {/* <ContactForm /> */}
      <TodoList />
      </header>
    </div>
  );
}
   
export default App;