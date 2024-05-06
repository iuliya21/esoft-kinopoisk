import styles from "./SearchPage.module.css";

function SearchPage() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <legend className={styles.title}>Поиск фильма по параметрам</legend>
        <div className={styles.inputs}>
          <label htmlFor="">Название фильма</label>
          <input type="text" placeholder="блабла" />
        </div>
        <div className={styles.inputs}>
          <label htmlFor="">Название фильма</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
}

export default SearchPage;
