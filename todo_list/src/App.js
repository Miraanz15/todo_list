import styles from "./App.module.css";
import {useState} from 'react';

function App() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
     console.log(event.target.value);
     setValue(event.target.value);
  }

   const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(`value = ${value}`);
    setValue(''); 
  }

  return (
    <div className={styles.App}>
        <form className={styles.taskAdder} onSubmit={handleSubmit}>
          <input type = "text" value = {value} placeholder = "Enter Task" onChange ={handleChange}/>
          <button>Add</button>
        </form>
    </div>
  );
}

export default App;
