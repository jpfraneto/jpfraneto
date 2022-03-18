import styles from './BottomNavbar.module.css';

const BottomNavbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <ul>
        <li>Album Of The Day</li>
        <li>Programming Logs</li>
        <li>Yoga Logs</li>
      </ul>
    </div>
  );
};

export default BottomNavbar;
