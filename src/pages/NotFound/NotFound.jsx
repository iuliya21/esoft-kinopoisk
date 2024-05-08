import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Not Found</h2>
      <p className={styles.text}>Упс... Ничего не найдено</p>
    </div>
  );
}

export default NotFound;
