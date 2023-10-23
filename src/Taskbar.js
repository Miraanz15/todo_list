import styles from './Taskbar.module.css';


function Taskbar({value}){
    return(
      <div className={styles.bar}>
         {value} 
      </div>
    );

}

export default Taskbar;