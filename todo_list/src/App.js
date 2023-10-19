import styles from "./App.module.css";
import {useState} from 'react';
import Taskbar from './Taskbar';

function App() {
  const [value, setValue] = useState('');
  const [components, setComponents] = useState([]);

  const handleChange = (event) => {
     console.log(event.target.value);
     setValue(event.target.value);
  }

   const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(`value = ${value}`); 
    const newComponent = <Taskbar value={value}/>;
    setComponents([...components, newComponent]);
    setValue('');
  }

  return (
    <div> 
    <div className={styles.App}>
        <form className={styles.taskAdder} onSubmit={handleSubmit}>
          <input className={styles.addValue} type = "text" value = {value} placeholder = "   Enter Task" onChange ={handleChange}/>
          <button className={styles.addButton}>Add</button>
        </form>
        {components.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
    </div>
    </div>
  );
}

export default App;
